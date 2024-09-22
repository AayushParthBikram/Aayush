package model;

public class Watchlist {
    private int id;
    private int userId;
    private int movieId;
    private String title;
    private String posterImage;
    private String releaseDate;
    private String synopsis;


    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public int getMovieId() {
        return movieId;
    }

    public String getTitle() {
        return title;
    }

    public String getPosterImage() {
        return posterImage;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPosterImage(String posterImage) {
        this.posterImage = posterImage;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }


}
