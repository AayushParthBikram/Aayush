package students;

import util.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class enrollmentDAO {
    private Connection connection;

    public enrollmentDAO() throws SQLException {
        // Get the connection from the DatabaseConnection class
        this.connection = DatabaseConnection.getConnection();
    }
    public List<Enrollment> getAllEnrollments() {
        List<Enrollment> enrollments = new ArrayList<>();
        String sql = "SELECT * FROM enrollments";
        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {
                Enrollment enrollment = new Enrollment();
                enrollment.setEnrollmentId(rs.getInt("enrollmentId"));
                enrollment.setStudentId(rs.getInt("studentId"));
                enrollment.setCourseId(rs.getInt("courseId"));
                enrollment.setSubjectId(rs.getInt("subjectId"));
                enrollment.setDuration(rs.getString("duration"));
                enrollments.add(enrollment);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return enrollments;
    }

    public Enrollment getEnrollmentById(int enrollmentId) {
        Enrollment enrollment = null;
        String query = "SELECT * FROM enrollments WHERE enrollment_id = ?";

        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, enrollmentId);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    enrollment = new Enrollment();
                    enrollment.setEnrollmentId(rs.getInt("enrollment_id"));
                    enrollment.setStudentId(rs.getInt("student_id"));
                    enrollment.setCourseId(rs.getInt("course_id"));
                    enrollment.setSubjectId(rs.getInt("subject_id"));
                    enrollment.setDuration(rs.getString("duration"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return enrollment;
    }

    public void insertEnrollment(Enrollment enrollment) {
        String sql = "INSERT INTO enrollments (studentId, courseId, subjectId, duration) VALUES (?, ?, ?, ?)";
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, enrollment.getStudentId());
            statement.setInt(2, enrollment.getCourseId());
            statement.setInt(3, enrollment.getSubjectId());
            statement.setString(4, enrollment.getDuration());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateEnrollment(Enrollment enrollment) {
        String query = "UPDATE enrollments SET student_id = ?, course_id = ?, subject_id = ?, duration = ? WHERE enrollment_id = ?";

        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, enrollment.getStudentId());
            pstmt.setInt(2, enrollment.getCourseId());
            pstmt.setInt(3, enrollment.getSubjectId());
            pstmt.setString(4, enrollment.getDuration());
            pstmt.setInt(5, enrollment.getEnrollmentId());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteEnrollment(int enrollmentId) {
        String query = "DELETE FROM enrollments WHERE enrollment_id = ?";

        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, enrollmentId);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }





}
