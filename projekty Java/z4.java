package k2;
import java.util.*;

public class z4 {
        public static void main(String[] args) {

        }
        static void Duel(Hero h1, Hero h2) {

        }
    }
//klasa abstract Hero
    abstract class Hero {
        String[] names = {"Jack", "Drake", "Max", "John", "Elf"};
        String name;
        int strength;
        int health;
        abstract void attack(Hero h);

        public Hero(String name, int strength, int health) {
            this.name = name;
            this.strength = strength;
            this.health = health;
        }
        //random hero ,
        Hero generateRandomHero() {
            Random r = new Random();
            return Math.random() == 1 ? new Knight(names[r.nextInt(names.length)], r.nextInt(300),
                    r.nextInt(600)) : new Wizard(names[r.nextInt(names.length)], r.nextInt(100),
                    r.nextInt(600), r.nextInt(250));
        }
    }
//knight
    class Knight extends Hero {
        public Knight(String name, int strength, int health) {
            super(name, strength, health);
        }

        @Override
        void attack(Hero h) {
            h.health -= strength * (Math.random() * (1.2f - .8f)) + .8f;
        }

        @Override
        public String toString() {
            return "Knight{" +
                    "name='" + name +
                    ", strength=" + strength +
                    ", health=" + health +
                    '}';
        }
    }
//wizard
    class Wizard extends Hero {
        int mana;
        public Wizard(String name, int strength, int health, int mana) {
            super(name, strength, health);
            this.mana = mana;
        }

        @Override
        void attack(Hero h) {
            h.health -= strength  * (Math.random() * (1.2f - .8f)) + .8f;
        }

        void magicAttack(Hero h) {
            h.health -= mana * (Math.random() * (1.2f - .8f)) + .8f;
        }

        @Override
        public String toString() {
            return "Wizard{" +
                    "name='" + name +
                    ", strength=" + strength +
                    ", health=" + health +
                    ", mana=" + mana +
                    '}';
        }
    }

