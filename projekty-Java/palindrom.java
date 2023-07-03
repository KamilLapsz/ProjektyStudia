package com.company;

public class Palindrom {
    public static boolean isPalindrome (String word) {
        word = word.toLowerCase();
        int length = word.length();
        int center = length/2;
        for (int i = 0; i < center; i++) {
            if(word.charAt(i) != word.charAt(--length)) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(Palindrom.isPalindrome("aBCdcBA"));
    }
}
