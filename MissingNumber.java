import java.util.*;
public class MissingNumber {

    public static int findSmallestMissingNumber(int [] arr){

        Set<Integer> set = new HashSet<>();

        for (int num : arr) {
            set.add(num);
        }


        int smallestMissingNumber = 1;

        while (true) {
            if (!set.contains(smallestMissingNumber)) {
                return smallestMissingNumber;
            }

            smallestMissingNumber++;
        }

    }

    public static void main(String[] args) {
        int [] arr = {3,4,-1,1};
        int result = findSmallestMissingNumber(arr);
        System.out.println("The Missing number in an array is:" + result);
    }
}
