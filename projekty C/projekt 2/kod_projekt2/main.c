#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Kamil £apszow - 30287
// PROJEKT 2 (13)
/*
    Kazdy wiersz danych zawiera nazwisko, imiê oraz:
        wiek (liczba całkowita z przedzialu 1..100) lub
        rok i miesiac urodzenia.
    Wprowadzanie danych koñczy pusta linia (zawierajaca jedna lub wiêcej
    spacji). Wyœwietliæ dane w postaci uporzadkowanej w/g wieku, przy załozeniu,
    ze wiek liczony w/g roku i miesiaca urodzenia jest zaokraglany do pełnych lat,
    a aktualnym rokiem jest 2017. Moze byæ co najwyzej 40 linii danych.
    Zastosowaæ sortowanie przez proste wstawianie.
*/

int main()
{
    typedef struct DaneOsob {
        char imie[20];
        char nazwisko[20];
        int wiek;
        double data;
    }Dane;

    Dane osoba[40];

        FILE *odczyt;
    if((odczyt=fopen("lista.txt","r"))==NULL)
    {
        printf("Nie mozna otworzyc pliku. \n");
        exit(1);
    }
    //SCAN linii -> dane osoby
    char* line = malloc(161*sizeof(char));
    int i=0;
    while((line = readLine(line, odczyt)) != NULL){
        //ZAPIS danych osoby do struktury
        //fscanf(odczyt,"%s",&osoba[i].nazwisko);
        osoba[i].nazwisko;
        osoba[i].imie;
        osoba[i].wiek;
        //nastepna linia
    }



    fclose(odczyt);

    return 0;
}

void pobierz_dane()
{

}
