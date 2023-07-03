package com.company;
public class Instrument {
    boolean czySprawny;
    boolean czyNastrojony;
    public Instrument() {
    }
    public Instrument(boolean czySprawny, boolean czyNastrojony) {
        this.czySprawny = czySprawny;
        this.czyNastrojony = czyNastrojony;
    }
    void napraw(){
        this.czySprawny = true;
        this.czyNastrojony = false;
    }
    void nastroj(){
        if (!(this.czySprawny)){
            System.out.println("Niesprawny. Napraw go.");
        }
        else {
            this.czyNastrojony=true;
        }
    }
    void graj(){
        if (!(this.czySprawny)){
            System.out.println("Napraw go.");
        }
        if (this.czySprawny && !(this.czyNastrojony)){
            System.out.println("Nastrój go.");
        }
        else if (this.czySprawny && this.czyNastrojony){
            System.out.println("Do re mi");
        }
    }
}
