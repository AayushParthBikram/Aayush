import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Collections;

public class RepeatedCharacters {
    public static void main(String[] args) {
        String input = "Bookeeper";
        String result = Logic(input);
        
        System.out.println("Sample Input: \"" + input + "\"");
        System.out.println("Sample Output: " + result);
    }

    public static String Logic(String input) {
        List<Character> repeatedChars = new ArrayList<>();
        Set<Character> seenChars = new HashSet<>();
        Set<Character> repeatedSet = new HashSet<>();

        for (char ch : input.toCharArray()) {
            if (!seenChars.add(ch)) {
                // If the character was already seen, add it to the repeated set.
                repeatedSet.add(ch);
            }
        }

        // Sort the repeated characters alphabetically.
        repeatedChars.addAll(repeatedSet);
        Collections.sort(repeatedChars, Collections.reverseOrder()  );

        return repeatedChars.toString();
    }
}
