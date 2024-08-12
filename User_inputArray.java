import java.util.Scanner;
public class User_inputArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("ENter the size for the array");
        int size = sc.nextInt();

        int [] array = new int[size];

        System.out.print("Enter" + size + "elements of array");

        for(int i=0; i<size; i++){
            System.out.print("Enter element#" + i+1 + ":");
            array[i] = sc.nextInt();
        }
        System.out.println("The entered elements  is :");

        for(int i=0; i<size; i++){
            System.out.println("ENtered elements:" + (i+1) + "Size:" + array[i]);
        }
        sc.close();
    }
}
