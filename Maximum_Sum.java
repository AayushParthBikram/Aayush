
import java.util.Arrays;
public class Maximum_Sum {


    public int maxSum(int [] arr){
        if (arr.length == 0){  //If the array would be empty we unable to proceed with So I return here 0.
            return 0;
        }

        int [] arr_max = new int [arr.length];

        arr_max[0] = arr[0];  //I intialize here maximum subsequences array having the same length of the given array.

        for (int i = 1; i < arr.length; i++) { //Iterate the loop in the subsequences array
            arr_max[i] = arr[i];  //write the elements of subsequences array.

            for (int j = 0; j < i; j++) { //I'm iterating thorugh each element  which is before the current element.
                if (arr[i] > arr[j] && arr_max[j] + arr[i] > arr_max[i]) {
                    arr_max[i] = arr_max[j] + arr[i];
                }
            }
        }

        int maximum = arr_max[0];
        
        for (int i = 1; i< arr_max.length; i++) {
            if (arr_max[i] > maximum) {
                maximum = arr_max[i];
            }
        }

        return maximum;
    }




    public static void main(String[] args) {

        Maximum_Sum maximum_Sum = new Maximum_Sum();

        int [] arr = {0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11};

        int Sum  = maximum_Sum.maxSum(arr);

        System.out.println("The maximum sum of increasing subsequences is - " + Sum);

        


}
}