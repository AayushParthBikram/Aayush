
import course.CourseController;
import io.javalin.Javalin;
import students.EnrollmentController;
import students.StudentController;
import subjects.SubjectController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class Main {
    public static void main(String[] args){

        String url = "jdbc:mysql://localhost:3306/university";
        String user = "root";
        String password = "@Akj123456";

        Javalin app= Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> {
                    it.anyHost();
                });
            });
        }).start(7071);

        try (Connection connection = DriverManager.getConnection(url, user, password)) {
            // Initialize controllers
            StudentController studentController = new StudentController(connection);
            CourseController courseController = new CourseController(connection);
            SubjectController subjectController = new SubjectController(connection);
            EnrollmentController enrollmentController = new EnrollmentController(connection);

            // Register routes for each controller
            studentController.registerRoutes(app);
            courseController.registerRoutes(app);
            subjectController.registerRoutes(app);
            enrollmentController.registerRoutes(app);

            System.out.println("Server started on http://localhost:7071");
        } catch (SQLException e) {
            System.err.println("Database connection failed: " + e.getMessage());
            e.printStackTrace();
        }

    }
}
