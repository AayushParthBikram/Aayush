package students;

import io.javalin.http.Handler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class EnrollmentController {

    private  enrollmentDAO enrollmentDAO;

    public EnrollmentController(Connection connection) throws SQLException {
        this.enrollmentDAO = new enrollmentDAO(); // Initialize the DAO
    }

    public void registerRoutes(io.javalin.Javalin app) {

        // Handler to get all enrollments
        Handler getAllEnrollments = ctx -> {
            List<Enrollment> enrollments = enrollmentDAO.getAllEnrollments();
            ctx.json(enrollments);
        };

        // Handler to get enrollment by ID
        Handler getEnrollmentById = ctx -> {
            int enrollmentId = Integer.parseInt(ctx.pathParam("id"));
            Enrollment enrollment = enrollmentDAO.getEnrollmentById(enrollmentId);
            if (enrollment != null) {
                ctx.json(enrollment);
            } else {
                ctx.status(404).result("Enrollment not found");
            }
        };

        // Handler to create a new enrollment
        Handler createEnrollment = ctx -> {
            Enrollment enrollment = ctx.bodyAsClass(Enrollment.class);
            enrollmentDAO.insertEnrollment(enrollment);
            ctx.status(201).result("Enrollment created");
        };

        // Handler to update an enrollment
        Handler updateEnrollment = ctx -> {
            int enrollmentId = Integer.parseInt(ctx.pathParam("id"));
            Enrollment enrollment = ctx.bodyAsClass(Enrollment.class);
            enrollment.setEnrollmentId(enrollmentId); // Ensure the ID is set
            enrollmentDAO.updateEnrollment(enrollment);
            ctx.result("Enrollment updated");
        };

        // Handler to delete an enrollment
        Handler deleteEnrollment = ctx -> {
            int enrollmentId = Integer.parseInt(ctx.pathParam("id"));
            enrollmentDAO.deleteEnrollment(enrollmentId);
            ctx.result("Enrollment deleted");
        };

        // Registering routes
        app.get("/enrollments", getAllEnrollments); // GET all enrollments
        app.get("/enrollments/{id}", getEnrollmentById); // GET enrollment by ID
        app.post("/enrollments", createEnrollment); // POST create a new enrollment
        app.put("/enrollments/{id}", updateEnrollment); // PUT update an existing enrollment
        app.delete("/enrollments/{id}", deleteEnrollment); // DELETE an enrollment
    }
}
