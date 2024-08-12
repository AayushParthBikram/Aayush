 public class DigitBattle {
    public static void main(String[] args) {
        String input1 = "578921445";
        String input2 = "558899";

        String output1 = findVictoriousDigits(input1);
        String output2 = findVictoriousDigits(input2);

        System.out.println("Sample Input1: " + input1);
        System.out.println("Sample Output1: " + output1);

        System.out.println("Sample Input2: " + input2);
        System.out.println("Sample Output2: " + output2);
    }

    public static String findVictoriousDigits(String input) {
        StringBuilder result = new StringBuilder();
        boolean allLose = true;

        for (int i = 0; i < input.length(); i++) {
            char currentDigit = input.charAt(i);
            char nextDigit = (i < input.length() - 1) ? input.charAt(i + 1) : '\0';

            if (currentDigit > nextDigit) {
                result.append(currentDigit);
                allLose = false;
            } else if (nextDigit > currentDigit) {
                result.append(nextDigit);
                allLose = false;
                i++; // Skip the next digit since it has already battled.
            } else {
                // Both digits are the same, so they both lose. Do nothing.
                i++; // Skip the next digit since it has already battled.
            }
        }

        if (allLose) {
            return "total carnage";
        } else {
            return result.toString();
        }
    }
}
