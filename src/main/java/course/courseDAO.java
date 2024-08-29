package course;

import util.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class courseDAO {

    private Connection connection;

    public  courseDAO() throws SQLException {
        this.connection = DatabaseConnection.getConnection();
    }

    public List<course> getAllCourses() {
        List<course> courses = new ArrayList<>();
        String sql = "SELECT * FROM courses";
        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {
                course course = new course();
                course.setCourseId(rs.getInt("course_id"));
                course.setCourseName(rs.getString("courseName"));
                course.setCourseDescription(rs.getString("courseDescription"));
                courses.add(course);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return courses;
    }

    public course getCourseById(int courseId) {
        course course = null;
        String sql = "SELECT * FROM courses WHERE course_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, courseId);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                course = new course();
                course.setCourseId(rs.getInt("course_id"));
                course.setCourseName(rs.getString("courseName"));
                course.setCourseDescription(rs.getString("courseDescription"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return course;
    }

    public void insertCourse(course course) {
        String sql = "INSERT INTO courses (courseName, courseDescription) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, course.getCourseName());
            statement.setString(2, course.getCourseDescription());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateCourse(course course) {
        String sql = "UPDATE courses SET courseName = ?, courseDescription = ? WHERE course_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, course.getCourseName());
            statement.setString(2, course.getCourseDescription());
            statement.setInt(3, course.getCourseId());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteCourse(int courseId) {
        String sql = "DELETE FROM courses WHERE course_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, courseId);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
