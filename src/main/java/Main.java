import controller.AuthController;
import controller.ReviewController;
import controller.WatchlistController;
import io.javalin.Javalin;
import model.ReviewDAO;
import model.UserDAO;
import model.WatchlistDAO;
import service.AuthService;

public class Main {

    public static void main(String[] args){
        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> {
                    it.anyHost();
                });
            });
        }).start(7071);

        app.before("/reviews", ctx -> {
            String token = ctx.header("Authorization");
            if (token == null || !AuthService.isValidToken(token.replace("Bearer ", ""))) {
                ctx.status(401).result("Unauthorized");
            }
        });

        UserDAO userDAO = new UserDAO();
        WatchlistDAO watchlistDAO = new WatchlistDAO();
        ReviewDAO reviewDAO = new ReviewDAO();
        AuthService authService = new AuthService();

        AuthController authController = new AuthController(userDAO, authService);
        WatchlistController watchlistController = new WatchlistController(watchlistDAO);
        ReviewController reviewController = new ReviewController(reviewDAO);

        authController.registerRoutes(app);
        watchlistController.registerRoutes(app);
        reviewController.registerRoutes(app);
    }

}
