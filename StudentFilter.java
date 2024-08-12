import java.util.*;
import java.util.stream.Collectors;
class Students{
    private String name;
    private String address;

    public Students(String name,String address){
        this.name = name;
        this.address = address;
    }

    public String getName(){
        return name;
    }
    public String getAddress(){
        return address;

    }

    @Override
    public String toString(){
        return "Student [name = " + name + ", address=" + address + "]";
    }
}
public class StudentFilter {
    public static void main(String[] args) {
        List<Students> students = new ArrayList<>();
        students.add(new Students("Alice", "123 Main ST"));
        students.add(new Students("BoB", "456 ELm ST"));

        String targetedAddress = "123 Main ST";

        List<Students> filterStudents = students.stream().filter(student -> student.getAddress().equals(targetedAddress)).collect(Collectors.toList());
        System.out.println("The list of address :" + targetedAddress);

        filterStudents.forEach(System.out::println);


    }
}
