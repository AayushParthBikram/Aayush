package subjects;


import util.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class subjectDAO {
    private  Connection connection;

    public subjectDAO () throws SQLException {
        this.connection = DatabaseConnection.getConnection();
    }

    public List<Subject> getAllSubjects() {
        List<Subject> subjects = new ArrayList<>();
        String sql = "SELECT * FROM subjects";
        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {
                Subject subject = new Subject();
                subject.setSubjectId(rs.getInt("subjectId"));
                subject.setSubjectName(rs.getString("subjectName"));
                subject.setSubjectDescription(rs.getString("subjectDescription"));
                subjects.add(subject);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return subjects;
    }

    public Subject getSubjectById(int subjectId) {
        Subject subject = null;
        String sql = "SELECT * FROM subjects WHERE subjectId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, subjectId);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                subject = new Subject();
                subject.setSubjectId(rs.getInt("subjectId"));
                subject.setSubjectName(rs.getString("subjectName"));
                subject.setSubjectDescription(rs.getString("subjectDescription"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return subject;
    }

    public void insertSubject(Subject subject) {
        String sql = "INSERT INTO subjects (subjectName, subjectDescription) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, subject.getSubjectName());
            statement.setString(2, subject.getSubjectDescription());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateSubject(Subject subject) {
        String sql = "UPDATE subjects SET subjectName = ?, subjectDescription = ? WHERE subjectId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, subject.getSubjectName());
            statement.setString(2, subject.getSubjectDescription());
            statement.setInt(3, subject.getSubjectId());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteSubject(int subjectId) {
        String sql = "DELETE FROM subjects WHERE subjectId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, subjectId);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
