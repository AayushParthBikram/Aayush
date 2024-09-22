package model;

import model.Review;
import util.DatabaseUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ReviewDAO {

    // Add a review to the database
    public void addReview(Review review) {
        String sql = "INSERT INTO reviews (movie_id, user_id, rating, content, date) VALUES (?, ?, ?, ?, ?)";
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, review.getMovieId());
            stmt.setInt(2, review.getUserId());
            stmt.setInt(3, review.getRating());
            stmt.setString(4, review.getContent());
            stmt.setTimestamp(5, java.sql.Timestamp.valueOf(review.getDate())); // Set the current date
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Remove a review from the database
    public void removeReview(int userId, String movieId) {
        String sql = "DELETE FROM reviews WHERE user_id = ? AND movie_id = ?";
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            stmt.setString(2, movieId);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Retrieve all reviews for a specific movie
    public List<Review> getReviewsByMovieId(String movieId) {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM reviews WHERE movie_id = ? ORDER BY date DESC"; // Sort by date descending
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, movieId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Review review = new Review();
                review.setMovieId(rs.getString("movie_id"));
                review.setUserId(rs.getInt("user_id"));
                review.setRating(rs.getInt("rating"));
                review.setContent(rs.getString("content"));
                review.setDate(rs.getTimestamp("date").toLocalDateTime()); // Get the date
                reviews.add(review);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return reviews;
    }
    // Retrieve all reviews by a specific user
    public List<Review> getReviewsByUserId(int userId) {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM reviews WHERE user_id = ? ORDER BY date DESC"; // Sort by date descending
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Review review = new Review();
                review.setMovieId(rs.getString("movie_id"));
                review.setUserId(rs.getInt("user_id"));
                review.setRating(rs.getInt("rating"));
                review.setContent(rs.getString("content"));
                review.setDate(rs.getTimestamp("date").toLocalDateTime()); // Get the date
                reviews.add(review);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return reviews;
    }
}
