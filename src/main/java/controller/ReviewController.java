package controller;

import io.javalin.Javalin;
import io.javalin.http.Context;
import model.Review;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import model.ReviewDAO;

import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.Map;
import java.time.LocalDateTime;

public class ReviewController {
    private static final Logger logger = Logger.getLogger(ReviewController.class.getName());
    private final ReviewDAO reviewDAO;

    public ReviewController(ReviewDAO reviewDAO) {
        this.reviewDAO = reviewDAO;
    }

    public void registerRoutes(Javalin app) {
        app.post("/reviews", this::submitReview);
        app.get("/reviews", this::getReviewsByMovieId);
    }

    private void submitReview(Context ctx) {
        try {
            // Check for the Authorization token
            String token = ctx.header("Authorization");
            if (token == null || token.isEmpty()) {
                ctx.status(401).json(Map.of("error", "Unauthorized: No token provided"));
                return;
            }

            // Extract the user ID from the token
            int userId = getUserIdFromToken(token);

            // Parse the review from the request body
            Review review = ctx.bodyAsClass(Review.class);
            review.setUserId(userId);

            // Set the current date before saving
            review.setDate(LocalDateTime.now());

            // Add the review to the database
            reviewDAO.addReview(review);

            // Return the full review object as JSON, including the comment and date
            ctx.status(201).json(review);
        } catch (Exception e) {
            Logger.getLogger(ReviewController.class.getName()).log(Level.SEVERE, "Error submitting review", e);

            // Return an error message as JSON
            ctx.status(400).json(Map.of("error", "Invalid input or error occurred"));
        }
    }
    private void getReviewsByMovieId(Context ctx) {
        try {
            String movieId = ctx.queryParam("movieId");
            if (movieId == null || movieId.isEmpty()) {
                ctx.status(400).result("Movie ID is required");
                return;
            }

            List<Review> reviews = reviewDAO.getReviewsByMovieId(movieId);
            ctx.json(reviews);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error retrieving reviews", e);
            ctx.status(500).result("Error retrieving reviews");
        }
    }

    private int getUserIdFromToken(String token) {
        DecodedJWT decodedJWT = JWT.decode(token.replace("Bearer ", ""));
        return decodedJWT.getClaim("userId").asInt();
    }
}
