package com.company;

//mebel
class Mebel {
    int waga;
    String kolor;
    boolean czyCzysty;

    public Mebel() {}

    public Mebel(String kolor, boolean czyCzysty) {
        this.kolor = kolor;
        this.czyCzysty = czyCzysty;
    }

    public Mebel pomaluj(String nowyKolor) {
        this.kolor = nowyKolor;
        return this;
    }

    public Mebel umyj() {
        this.czyCzysty = true;
        return this;
    }

    void uzywaj() {
        System.out.println(this.czyCzysty ? "Fajny mebel" : "Najpierw go umyj");
    }
//main
    public static void main(String[] args) {
        Mebel mebel = new Mebel("white", false);
        mebel.uzywaj();
        mebel.pomaluj("blue");
        mebel.umyj();
        mebel.uzywaj();
    }
}
//szafa
class Szafa extends Mebel {
    public Szafa(String kolor, boolean czyCzysty) {
        super(kolor, czyCzysty);
    }

    @Override
    public Mebel umyj() {
        System.out.println("Szafa naprawiona!");
        return super.umyj();
    }

    @Override
    public Mebel pomaluj(String nowyKolor) {
        System.out.println("Szafa pomalowana na kolor: " + nowyKolor);
        return super.pomaluj(nowyKolor);
    }

}
//krzeslo
class Krzeslo extends Mebel {

    public Krzeslo(String kolor, boolean czyCzysty) {
        super(kolor, czyCzysty);
    }

    @Override
    public Mebel umyj() {
        System.out.println("Krzeslo naprawione!");
        return super.umyj();
    }

    @Override
    public Mebel pomaluj(String nowyKolor) {
        System.out.println("Krzeslo pomalowane na kolor: " + nowyKolor);
        return super.pomaluj(nowyKolor);
    }

}
// zestaw mebli
class ZestawMebli {
    private Szafa szafa;
    private Krzeslo krzeslo;

    public ZestawMebli(Szafa szafa, Krzeslo krzeslo) {
        this.szafa = szafa;
        this.krzeslo = krzeslo;
    }

    public ZestawMebli pomaluj(String nowyKolor) {
        this.szafa.pomaluj(nowyKolor);
        this.krzeslo.pomaluj(nowyKolor);
        return this;
    }

    public ZestawMebli umyj() {
        this.szafa.umyj();
        this.krzeslo.umyj();
        return this;
    }

    public void uzywaj() {
        this.szafa.uzywaj();
        this.krzeslo.uzywaj();
    }
// main
    public static void main(String[] args) {
        ZestawMebli zestawMebli = new ZestawMebli(new Szafa("white", false), new Krzeslo("red", false));
        zestawMebli.uzywaj();
        zestawMebli.pomaluj("blue");
        zestawMebli.umyj();
        zestawMebli.uzywaj();

        Mebel[] array = new Mebel[3];
        array[0] = new Szafa("red", true);
        array[1] = new Krzeslo("green", true);
        array[2] = new Mebel("blue", true);

        for (Mebel a: array) {
            a.uzywaj();
        }
    }
}
