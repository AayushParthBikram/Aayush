public class LengthofLongestSubstring {
    public static void main(String[] args) {
        String s1 = "babad";
        String s2 = "cbbd";

        System.out.println(longestPalindrome(s1));
        System.out.println(longestPalindrome(s2));
    }

    public static String longestPalindrome(String s){

        int n = s.length();

        if(n < 2){
            return s;
        }

        boolean [][] dp = new boolean[n][n];
        int start = 0;
        int maxLen = 1;

        for(int i=0; i<n; i++){
            dp[i][i] = true;
        }

        for(int i=0; i<n-1; i++){
            if(s.charAt(i) == s.charAt(i+1)){
                dp[i][i+1] = true;
                start = i;
                maxLen = 2;
            }
        }

        for(int len=3; len<=n; len++){
            for(int i=0; i + len - 1 < n; i++){
                int j = i + len - 1;


                if(s.charAt(i) == s.charAt(j) && dp[i+1][j-1]){
                    dp[i][j] = true;

                    if(len > maxLen){
                        start = i;
                        maxLen = len;
                    }
                }
            }
        }
        return s.substring(start, start+maxLen);

    }
}


