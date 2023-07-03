package k2;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.TreeSet;

public class z2 {
    public static void main(String[] args) {
        // deklaracja ArrayList
        ArrayList<Integer> al1 = new ArrayList<> ();
        ArrayList<Integer> al2 = new ArrayList<> ();

        // wypelnij i wypisz
        for (int i = 0; i < 50 ; i++) {
            al1.add ((int) ((Math.random() * (20 - (-10))) + (-10)));
            al2.add ((int) ((Math.random() * (50 - 10) + 10)));
        }
        System.out.println(al1);
        System.out.println(al2);

        // nowa lista (kopiuj al1) - usun elementy z al2
        ArrayList<Integer> al3 = new ArrayList<>(al1);
        al3.removeAll (al2);
        System.out.println (al3);

        // policz ile 7
        int counter = (int) al3.stream().filter(el -> el == 7).count();
        System.out.println("Licznik 7: " + counter);

        // usun duplikaty, sortuj
        System.out.println (new TreeSet<>(al3));
        al3.sort (Comparator.reverseOrder ());
        System.out.println (al3 );
    }
}