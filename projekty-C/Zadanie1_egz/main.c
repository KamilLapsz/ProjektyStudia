#include <stdio.h>

#include <stdlib.h>

/************************************

Ten program liczy sumê silnii od 0! do n!

ie. 0! + 1! + 2! +... n!

*************************************/

long sumaSilnii (int);

long silnia (int);

int main()

{

    printf("%ld", sumaSilnii (4));

    return 0;

}

long sumaSilnii (int n){

//dodalem sWynik
long ciag=1, sWynik=1;

for (long i=1;i<=n;i++){
    sWynik *= i;
    ciag += sWynik;
}

return ciag;

}



long silnia (int n) {

long siln =1;

for (int i=2;i<=n;i++) siln*=i;

return siln;

}

