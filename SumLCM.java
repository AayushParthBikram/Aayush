import java.util.Scanner;

public class SumLCM {
    public static int GCD(int a , int b){
        if (b == 0) {
            return a;
        }
        return GCD(b , a % b);
    }

    public static int Lcm (int a , int b){

        return (a * b) / GCD(a,b);

    }

    public static int sumOfLcm(int N){
        int sum = 0;

        for (int i = 1; i <= N; i++) {
            sum += Lcm(i,N);
        }

        return sum;
    }


    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        try {

            System.out.print("Enter a positive Integer N - ");

            int N = sc.nextInt();

            if (N <=0) {
                throw new IllegalArgumentException("The Number must be positive");
            }


            int result = sumOfLcm(N);


            System.out.println("Sum of LCMs from 1 to " + N + " with " + N + "is" + result);



            
        } catch (IllegalArgumentException e) {
            

            System.out.println("Error " + e.getMessage());
        }

        catch (Exception e ){

            System.out.println("Invalid Input Please enter a positive integer");

        }

        finally{
            sc.close();
        }
    }
}
