package subjects;

import io.javalin.Javalin;
import io.javalin.http.Handler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;


public class SubjectController {
    private subjectDAO subjectDAO;

    public SubjectController(Connection connection) throws SQLException {
        this.subjectDAO = new subjectDAO();
    }

    public void registerRoutes(Javalin app) {
        app.get("/subjects", getAllSubjects);
        app.get("/subjects/{subjectId}", getSubjectById);
        app.post("/subjects", createSubject);
        app.put("/subjects/{subjectId}", updateSubject);
        app.delete("/subjects/{subjectId}", deleteSubject);
    }


    private Handler getAllSubjects = ctx -> {
        List<Subject> subjects = subjectDAO.getAllSubjects();
        if (subjects.isEmpty()) {
            ctx.status(404).result("No subjects found.");
        } else {
            ctx.json(subjects);
        }
    };

    private Handler getSubjectById = ctx -> {
        int subjectId = Integer.parseInt(ctx.pathParam("subjectId"));
        Subject subject = subjectDAO.getSubjectById(subjectId);
        if (subject == null) {
            ctx.status(404).result("Subject not found.");
        } else {
            ctx.json(subject);
        }
    };


    private Handler createSubject = ctx -> {
        Subject subject = ctx.bodyAsClass(Subject.class);
        subjectDAO.insertSubject(subject);
        ctx.status(201).result("Subject created successfully.");
    };

    private Handler updateSubject = ctx -> {
        int subjectId = Integer.parseInt(ctx.pathParam("subjectId"));
        Subject subject = ctx.bodyAsClass(Subject.class);
        subject.setSubjectId(subjectId);
        if (subjectDAO.getSubjectById(subjectId) == null) {
            ctx.status(404).result("Subject not found.");
        } else {
            subjectDAO.updateSubject(subject);
            ctx.status(200).result("Subject updated successfully.");
        }
    };

    private Handler deleteSubject = ctx -> {
        int subjectId = Integer.parseInt(ctx.pathParam("subjectId"));
        if (subjectDAO.getSubjectById(subjectId) == null) {
            ctx.status(404).result("Subject not found.");
        } else {
            subjectDAO.deleteSubject(subjectId);
            ctx.status(200).result("Subject deleted successfully.");
        }
    };







}
