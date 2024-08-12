import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.function.Consumer;

public class FunctionalLiteralsExample {

    public static void main(String[] args) {
        // Creating a list of integers
        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);

        // Example 1: Using a lambda expression as a functional literal
        // Filtering even numbers using a lambda expression
        List<Integer> evenNumbers = filter(numbers, n -> n % 2 == 0);
        System.out.println("Even numbers: " + evenNumbers);

        // Example 2: Using a lambda expression as an argument to a method
        // Executing a custom operation on each element of the list
        forEach(numbers, n -> System.out.println("Number: " + n));

        // Example 3: Using predefined functional interfaces
        // Creating a predicate using a lambda expression to test if a number is greater than 3
        Predicate<Integer> greaterThanThree = n -> n > 3;
        System.out.println("Is 4 greater than 3? " + greaterThanThree.test(4));
    }

    // Example 1: Using a functional literal as an argument to a method
    public static List<Integer> filter(List<Integer> list, Predicate<Integer> predicate) {
        List<Integer> result = new ArrayList<>();
        for (Integer item : list) {
            if (predicate.test(item)) {
                result.add(item);
            }
        }
        return result;
    }

    // Example 2: Using a functional literal as an argument to a method
    public static void forEach(List<Integer> list, Consumer<Integer> consumer) {
        for (Integer item : list) {
            consumer.accept(item);
        }
    }
}
