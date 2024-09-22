package model;

import util.DatabaseUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class WatchlistDAO {

    // Add the Movie as a Back-End to the WatchList.
    public void addToWatchlist(Watchlist watchlist) {
        String sql = "INSERT INTO watchlist (user_id, movie_id, title, poster_image, release_date, synopsis) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, watchlist.getUserId());
            stmt.setInt(2, watchlist.getMovieId());
            stmt.setString(3, watchlist.getTitle());
            stmt.setString(4, watchlist.getPosterImage());
            stmt.setString(5, watchlist.getReleaseDate());
            stmt.setString(6, watchlist.getSynopsis());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Remove the movie from Added watchlist
    public void removeFromWatchlist(int userId, int movieId) {
        String sql = "DELETE FROM watchlist WHERE user_id = ? AND movie_id = ?";
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            stmt.setInt(2, movieId);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Retrieve all watchlist items for a specific user
    public List<Watchlist> getWatchlistsByUserId(int userId) {
        List<Watchlist> watchlistItems = new ArrayList<>();
        String sql = "SELECT * FROM watchlist WHERE user_id = ?";
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Watchlist watchlist = new Watchlist();
                watchlist.setId(rs.getInt("id"));
                watchlist.setUserId(rs.getInt("user_id"));
                watchlist.setMovieId(rs.getInt("movie_id"));
                watchlist.setTitle(rs.getString("title"));
                watchlist.setPosterImage(rs.getString("poster_image"));
                watchlist.setReleaseDate(rs.getString("release_date"));
                watchlist.setSynopsis(rs.getString("synopsis"));
                watchlistItems.add(watchlist);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return watchlistItems;
    }
}
