package controller;

import io.javalin.Javalin;
import io.javalin.http.Context;
import model.User;
import model.UserDAO;
import org.mindrot.jbcrypt.BCrypt;
import service.AuthService;

import java.util.HashMap;
import java.util.Map;

public class AuthController {

    private final UserDAO userDAO;
    private final AuthService authService;

    public AuthController(UserDAO userDAO, AuthService authService) {
        this.userDAO = userDAO;
        this.authService = authService;
    }

    public void registerRoutes(Javalin app) {
        app.post("/register", this::registerUser);
        app.post("/login", this::loginUser);
    }

    private void registerUser(Context ctx) {
        try {
            User user = ctx.bodyAsClass(User.class);
            // Hash the user's password before saving
            String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
            user.setPassword(hashedPassword);
            userDAO.saveUser(user);
            ctx.status(201).result("User registered successfully");
        } catch (Exception e) {
            ctx.status(400).result("Error registering user");
            e.printStackTrace();
        }
    }

    private void loginUser(Context ctx) {
        try {
            Map<String, String> credentials = ctx.bodyAsClass(HashMap.class);
            String username = credentials.get("username");
            String password = credentials.get("password");

            // Validate user credentials
            User user = userDAO.getUserByUsername(username);
            if (user != null && BCrypt.checkpw(password, user.getPassword())) {
                // Generate JWT token
                String token = authService.generateToken(user);

                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                ctx.json(response);
            } else {
                ctx.status(401).result("Invalid username or password");
            }
        } catch (Exception e) {
            ctx.status(500).result("Error logging in");
            e.printStackTrace();
        }
    }
}
