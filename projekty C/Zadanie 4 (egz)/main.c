#include <stdio.h>

#include <stdlib.h>



void subSet (int tab[], int size, int a, int b) {

    for (int i = 0; i < size; i++) {

        if (tab[i] >= a && tab[i] <= b)

            printf("%d\t", tab[i]);

    }

}



int *add (int tab[], int size, int el, int index);



int main() {

    int tab[] = { 1,2,3,4,5,6,7,8,9 };

    subSet(tab, 9, 2, 5);

}

