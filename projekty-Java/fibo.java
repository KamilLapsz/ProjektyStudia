package com.company;

public class fibo {

    static int Fibonacci(int n){
        int suma=0;
        int x1=0;
        int x2=1;

        while(x1+x2<n){
            int temp=x2;
            x2=x2+x1;
            x1=temp;

            if(x2%2==0)
                suma+=x2;
        }
        return suma;
    }

    public static void main(String[] args) {
        System.out.println(fibo.Fibonacci(15));
    }
}
