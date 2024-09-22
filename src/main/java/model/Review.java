package model;

import java.time.LocalDateTime;

public class Review {
    private String movieId;
    private int user_id;
    private String content;
    private int rating;
    private LocalDateTime date;  // New date field

    // Getters and setters for all fields
    public int getRating() {
        return rating;
    }

    public String getMovieId() {
        return movieId;
    }

    public String getContent() {
        return content;
    }

    public int getUserId() {
        return user_id;
    }

    public LocalDateTime getDate() {
        return date;  // Getter for date
    }

    public void setUserId(int user_id) {
        this.user_id = user_id;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;  // Setter for date
    }
}
