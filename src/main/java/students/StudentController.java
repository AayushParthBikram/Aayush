package students;


import io.javalin.Javalin;
import io.javalin.http.Handler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;


public class StudentController {
    private  studentDAO studentDAO;


    public  StudentController(Connection connection) throws SQLException {
        this.studentDAO = new studentDAO();
    }

    public void registerRoutes(Javalin app) {
        app.get("/students", getAllStudents);
        app.get("/students/{studentId}", getStudentById);
        app.post("/students", createStudent);
        app.put("/students/{studentId}", updateStudent);
        app.delete("/students/{studentId}", deleteStudent);
        // Add more routes for student CRUD operations
    }

    private Handler getAllStudents = ctx -> {
        List<Student> students = studentDAO.getAllStudents();
        if (students.isEmpty()) {
            ctx.status(404).result("No students found.");
        } else {
            ctx.json(students);
        }
    };

    private Handler getStudentById = ctx -> {
        int studentId = Integer.parseInt(ctx.pathParam("studentId"));
        Student student = studentDAO.getStudentById(studentId);
        if (student == null) {
            ctx.status(404).result("Student not found.");
        } else {
            ctx.json(student);
        }
    };

    private Handler createStudent = ctx -> {
        Student student = ctx.bodyAsClass(Student.class);
        studentDAO.insertStudent(student);
        ctx.status(201).json(student);
    };

    private Handler updateStudent = ctx -> {
        int studentId = Integer.parseInt(ctx.pathParam("studentId"));
        Student student = ctx.bodyAsClass(Student.class);
        student.setStudentId(studentId);
        if (studentDAO.getStudentById(studentId) == null) {
            ctx.status(404).result("Student not found.");
        } else {
            studentDAO.updateStudent(student);
            ctx.status(200).result("Student updated successfully.");
        }
    };

    private Handler deleteStudent = ctx -> {
        int studentId = Integer.parseInt(ctx.pathParam("studentId"));
        if (studentDAO.getStudentById(studentId) == null) {
            ctx.status(404).result("Student not found.");
        } else {
            studentDAO.deleteStudent(studentId);
            ctx.status(200).result("Student deleted successfully.");
        }
    };
}

