//main
package com.company;

public class Main {

    public static void main(String[] args) {
        UmieLatac biedronka = new Biedronka("Biedronka",7);
        biedronka.lata();
        biedronka.laduje();
    }
}
//Biedronka
package com.company;

public class Biedronka implements UmieLatac{
    String imie;
    int ileKropek;

    public Biedronka(String imie, int ileKropek) {
        this.imie = imie;
        this.ileKropek = ileKropek;
    }

    @Override
    public void lata() {
        System.out.println("Leci.");
    }

    @Override
    public void laduje() {
        System.out.println("Laduje.");
    }
}

//interfejs UmieLatac
package com.company;

public interface UmieLatac {
    void lata();
    void laduje();
}
