package controller;

import io.javalin.Javalin;
import io.javalin.http.Context;
import model.Watchlist;
import model.WatchlistDAO;
import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class WatchlistController {
    private static final Logger logger = Logger.getLogger(WatchlistController.class.getName());
    private final WatchlistDAO watchlistDAO;

    public WatchlistController(WatchlistDAO watchlistDAO) {
        this.watchlistDAO = watchlistDAO;
    }

    public void registerRoutes(Javalin app) {
        app.post("/watchlist", this::addToWatchlist);
        app.delete("/watchlist/{movieId}", this::removeFromWatchlist);
        app.get("/watchlist", this::getAllWatchlists);
    }

    private void addToWatchlist(Context ctx) {
        try {
            String token = ctx.header("Authorization");
            if (token == null || token.isEmpty()) {
                ctx.status(401).result("Unauthorized: No token provided");
                return;
            }

            int userId = getUserIdFromToken(token);
            Watchlist watchlist = ctx.bodyAsClass(Watchlist.class);
            watchlist.setUserId(userId);
            watchlistDAO.addToWatchlist(watchlist);
            ctx.status(201).result("Movie added to watchlist");
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error adding movie to watchlist", e);
            ctx.status(400).result("Invalid input or error occurred");
        }
    }

    private void removeFromWatchlist(Context ctx) {
        try {
            String token = ctx.header("Authorization");
            if (token == null || token.isEmpty()) {
                ctx.status(401).result("Unauthorized: No token provided");
                return;
            }

            int userId = getUserIdFromToken(token);
            int movieId = Integer.parseInt(ctx.pathParam("movieId"));
            watchlistDAO.removeFromWatchlist(userId, movieId);
            ctx.status(200).result("Movie removed from watchlist");
        } catch (NumberFormatException e) {
            logger.log(Level.WARNING, "Invalid movie ID format", e);
            ctx.status(400).result("Invalid movie ID provided");
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error removing movie from watchlist", e);
            ctx.status(500).result("Error removing movie from watchlist");
        }
    }

    private void getAllWatchlists(Context ctx) {
        try {
            String token = ctx.header("Authorization");
            if (token == null || token.isEmpty()) {
                ctx.status(401).result("Unauthorized: No token provided");
                return;
            }

            int userId = getUserIdFromToken(token);
            List<Watchlist> watchlistItems = watchlistDAO.getWatchlistsByUserId(userId);
            ctx.json(watchlistItems);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error retrieving watchlists", e);
            ctx.status(500).result("Error retrieving watchlists");
        }
    }

    private int getUserIdFromToken(String token) {
        DecodedJWT decodedJWT = JWT.decode(token.replace("Bearer ", ""));
        return decodedJWT.getClaim("userId").asInt();
    }
}
