package service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import model.User;

public class AuthService {

    private static final String SECRET = "your_secret_key"; // Use a secure key in production

    public static boolean isValidToken(String bearer) {
        if (bearer == null || !bearer.startsWith("Bearer ")) {
            return false;
        }

        String token = bearer.substring(7); // Extract the token from the "Bearer " prefix

        try {
            // Set up the JWT verifier with the algorithm and secret key
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();

            // Verify and decode the token
            DecodedJWT decodedJWT = verifier.verify(token);

            // Optionally, check additional claims, such as expiration
            // Example: Check if the token is expired
            if (decodedJWT.getExpiresAt() == null || decodedJWT.getExpiresAt().before(new java.util.Date())) {
                return false;
            }

            return true;

        } catch (JWTVerificationException e) {
            // Log the error
            e.printStackTrace(); // Replace with a proper logging mechanism
            return false;
        }
    }

    public String generateToken(User user) {
        return JWT.create()
                .withSubject(user.getUsername())
                .withClaim("userId", user.getId()) // Use actual user ID
                .sign(Algorithm.HMAC256(SECRET));
    }

    public boolean authenticate(User user) {
        // Implement actual authentication logic, e.g., check credentials in the database
        return "testuser".equals(user.getUsername()) && "password".equals(user.getPassword());
    }
}
