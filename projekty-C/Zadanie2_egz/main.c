#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <time.h>


int kabalaValue(char* n);
void generateKabala(int val);

int main() {

    kabalaValue("T345es@@t");
	generateKabala(20);

    return 0;

}

int kabalaValue(char* n) {

    int slowo = strlen(n);
    int i = 0, kabala = 0;

    while (i < slowo) {
        if (isalpha(n[i])) {
            pom = tolower(n[i]);
            //literka -96 = wartosc
            int kodAscii = (int)pom -96;
           	kabala += kodAscii;
        }
        else if (isalpha(n[i - 1]) && !isalpha(n[i])) {
            break;
        }
        i++;
    }

    printf("Slowo pierwsze (wartosc): %d", kabala);

}



void generateKabala(int val) {

    srand(time(0));
    while (val > 0) {
        int x = 0;
        if (val > 26) {
            x = rand() % 26 + 1;
            printf("%c", x+96);
        }
        else {
            printf("%c", val+96);
            break;
        }
        val = val - x;
    }
}
