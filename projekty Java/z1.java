package k2;
import java.util.Scanner;
import java.util.*;

public class z1 {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            int number = scanner.nextInt();

            if(number < 0)
                throw new MyException("Podana liczba jest ujemna.");

            System.out.println("Liczba: " + number);
        } catch (MyException ex) {
            System.out.println(ex.getMessage());
        } catch (InputMismatchException ex){
            System.out.println("Error: Podane dane nie są liczbą całkowitą.");
        } catch (Exception ex) {
            System.out.println("Error: Wystąpił nieznany wyjątek " + ex.getMessage());
        }
    }
}


class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}