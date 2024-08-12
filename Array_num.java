public class Array_num{

    public static void main(String[] args) {
        int[] arr = { 60,70, 10, 30, 20, 40,80,50 };

        int max1 = Integer.MIN_VALUE;
        int max2 =  Integer.MIN_VALUE;

        for(int i=0; i<arr.length; i++){
            if(arr[i] > max1){
                max2 = max1;
                max1 = arr[i];
            }
            else if(arr[i] > max2 && arr[i] != max1){
                max2 = arr[i];
            }
        }

        System.out.println("The second highest elements of the Array is:" + max2);
        
}
}