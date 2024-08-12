import java.util.HashMap;
public class TwoSum {
    public static int[] twoSum(int [] num, int target){
        HashMap<Integer,Integer> numIndices = new HashMap<>();

        for (int i=0; i<num.length; i++){
            int compliment = target - num[i];

            if(numIndices.containsKey(compliment)){
                return new int[] {numIndices.get(compliment),i};
            }
            numIndices.put(num[i], i);

        }
        return new int[0];
    }
    public static void main(String[] args) {
        int [] num = {2,7,11,15};
        int target = 9;
        int [] result = twoSum(num, target);

        System.out.println("Output is:  ["+ result[0] + " ," + result[1] + "]");
    }
}
