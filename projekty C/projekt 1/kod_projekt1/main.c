#include <stdio.h>
#include <stdlib.h>
#include <math.h>

    // Kamil Lapszow
    /*
    ZADANIE 1 (13)
    Znalezc pierwiastek rownania x^2-sin(x)-1=0 w podanym przez uzytkownika przedziale (a,b)
    z dokladnoscia E wykorzystujac metode siecznych

    Wskazówka: metoda siecznych polega na zast¹pieniu funkcji, której miejsca zerowego poszukujemy
    jako f(x)=0, przez prosta rozpieta na punktach wyznaczajacych brzegi przedzialu poszukiwania rozwiazania:

    1. Rozwiazanie jest poszukiwane w podanym przez u¿ytkownika przedziale <a,b>
    2. Jezeli wartoœci funkcji na krancach przedzialu maja przeciwne znaki
    (tj. w przedziale jest pierwiastek - lub nieparzysta ich liczba), to mozna kontynuowac poszukiwanie -
    w przeciwnym wypadku zasygnalizowaæ niepoprawne dane i koniec.
    3. Obliczamy wartosc c jako punkt przeciecia prostej poprowadzonej przez punkty (a, f(a)) oraz (b,f(b))
    4. Jezeli f(a) i f(c) maja przeciwne znaki, to nowa wartosc b=c, w przeciwnym wypadku a=c
    5. Jezeli |f(c)|< E to c mo¿na uznaæ za rozwiazanie, w przeciwnym wypadku powtarzac od p. 3
    */

//deklaracja funkcji - cala funkcja pod funkcja main()
    float funkcja(float);

int main()
{

//deklaracja zmiennych
    float a = 0, b = 0, c = 0;
    float fa = 0, fb = 0, fc = 0;
    float e = 0.00001, i = 64;
    char y1, y2, y3;

//pobranie danych
    printf("Prosze podac poczatek przedzialu w ktorym bedziemy szukac pierwiastka rowniania\n");
    scanf("%f", &a);
    printf("Prosze podac koniec przedzialu w ktorym bedziemy szukac pierwiastka rowniania\n");
    scanf("%f", &b);

//przypisanie zmiennych
    fa = funkcja(a);
    fb = funkcja(b);
    y1 = fa >= 0 ?  'd' : 'u';
    y2 = fb >= 0 ?  'd' : 'u';

    if(y1 == y2){
        printf("Bledny przedzial!\n");
        return 1;
    }

    while( i > 0){
        c = ((0 - fa) * (b - a)/(fb - fa)) + a;
        fc = funkcja(c);
        y3 = fc >= 0 ?  'd' : 'u';
        if(y1 != y3) b = c;
        else a = c;
        if (fabs(fc) < e){
            printf("F(c): %f \n", fc );
            printf("Pierwiastek to: %f \n",c);
            break;
        }
        i--;
    }

    return 0;
}

float funkcja(float x){
    return (x*x - sin(x) - 1);
}
