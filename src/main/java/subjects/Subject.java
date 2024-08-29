package subjects;

public class Subject {

    private int subjectId;
    private String subjectName;
    private String subjectDescription;


    public int getSubjectId() {
        return subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public String getSubjectDescription() {
        return subjectDescription;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public void setSubjectDescription(String subjectDescription) {
        this.subjectDescription = subjectDescription;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }


}
