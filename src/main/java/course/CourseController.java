package course;

import io.javalin.Javalin;
import io.javalin.http.Handler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class CourseController {
    private courseDAO courseDAO;

    public CourseController(Connection connection) throws SQLException {
        this.courseDAO = new courseDAO();
    }

    public void registerRoutes(Javalin app) {
        app.get("/courses", getAllCourses);
        app.get("/courses/{courseId}", getCourseById);
        app.post("/courses", createCourse);
        app.put("/courses/{courseId}", updateCourse);
        app.delete("/courses/{courseId}", deleteCourse);
        // Add more routes for course CRUD operations
    }

    private Handler getAllCourses = ctx -> {
        List<course> courses = courseDAO.getAllCourses();
        ctx.json(courses);
    };

    private Handler getCourseById = ctx -> {
        int courseId = Integer.parseInt(ctx.pathParam("courseId"));
        course course = courseDAO.getCourseById(courseId);
        if (course == null) {
            ctx.status(404).result("Courses not found");
        } else {
            ctx.json(course);
        }
    };

    private Handler createCourse = ctx -> {
        course course = ctx.bodyAsClass(course.class);
        courseDAO.insertCourse(course);
        ctx.status(201).result("Courses created successfully.");
    };


    private Handler updateCourse = ctx -> {
        int courseId = Integer.parseInt(ctx.pathParam("courseId"));
        course course = ctx.bodyAsClass(course.class);
        course.setCourseId(courseId);
        if (courseDAO.getCourseById(courseId) == null) {
            ctx.status(404).result("Course not found with provided Id");
        } else {
            courseDAO.updateCourse(course);
            ctx.status(200).result("Course Updated successfully");
        }
    };

    private Handler deleteCourse = ctx -> {
        int courseId = Integer.parseInt(ctx.pathParam("courseId"));
        if (courseDAO.getCourseById(courseId) == null) {
            ctx.status(404).result("Course not foumd with provided Id");
        } else {
            courseDAO.deleteCourse(courseId);
            ctx.status(200).result("Courses Deleted successfully");
        }
    };













}
