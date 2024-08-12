import java.util.*;

public class ReorderLogs {
    public String[] reorderLogs(String[] logs) {
        // Create a custom comparator to sort logs
        Comparator<String> logComparator = new Comparator<String>() {
            @Override
            public int compare(String log1, String log2) {
                String[] split1 = log1.split(" ", 2);
                String[] split2 = log2.split(" ", 2);
                boolean isDigit1 = Character.isDigit(split1[1].charAt(0));
                boolean isDigit2 = Character.isDigit(split2[1].charAt(0));

                // If both logs are letter-logs
                if (!isDigit1 && !isDigit2) {
                    int contentComparison = split1[1].compareTo(split2[1]);
                    if (contentComparison == 0) {
                        return split1[0].compareTo(split2[0]); // Sort by identifier
                    } else {
                        return contentComparison; // Sort by content
                    }
                } else if (!isDigit1) {
                    return -1; // log1 is a letter-log, log2 is a digit-log, log1 comes first
                } else if (!isDigit2) {
                    return 1; // log2 is a letter-log, log1 is a digit-log, log2 comes first
                } else {
                    return 0; // Both are digit-logs, maintain their relative order
                }
            }
        };

        // Sort the logs using the custom comparator
        Arrays.sort(logs, logComparator);
        return logs;
    }

    public static void main(String[] args) {
        ReorderLogs solution = new ReorderLogs();
        String[] logs = {
            "dig1 8 1 5 1",
            "let1 art can",
            "dig2 3 6",
            "let2 own kit dig",
            "let3 art zero"
        };
        String[] reorderedLogs = solution.reorderLogs(logs);
        
        for (String log : reorderedLogs) {
            System.out.println(log);
        }
    }
}
