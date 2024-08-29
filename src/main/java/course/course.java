package course;

public class course {

    private int courseId;
    private String courseName;
    private String courseDescription;

    public int getCourseId() {
        return courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
