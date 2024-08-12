import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class RepeatedStrings {
    public static void main(String[] args) {
        String s = "Bookkeeper";
        String result = Logic(s);

        System.out.println("Your string is this :" +s);
        System.out.println("The result of your's is as follows :" +result);

    }

    public static String Logic(String input){
        List<Character> repeatedCharacters = new ArrayList<>();
        Set<Character> seenCharacters = new HashSet<>();
        Set<Character> RepeatedCharacters = new HashSet<>();

        for(char ch: input.toCharArray()){
            if (!seenCharacters.add(ch)) {
                RepeatedCharacters.add(ch);
            }
        }
        repeatedCharacters.addAll(RepeatedCharacters);
        Collections.sort(repeatedCharacters,Collections.reverseOrder() );

        return repeatedCharacters.toString();
    }

}
