#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// a) struktury
    typedef struct PoInt {
        float x;
        float y;
    }pXY;

    typedef struct Rectangle {
        pXY ld;
        pXY pg;

    }Rectangle;

    pXY createPoint (float X,float Y){

    pXY p;
    p.x=X;
    p.y=Y;

    return p;

}
    float rectangleArea(Rectangle r);
    int ifPointBelongsToRectangle(Rectangle r, pXY p);

int main()
{


    return 0;
}

// b) pole
    float rectangleArea(Rectangle r){

        float a,b;
        a = r.pg.x - r.ld.x;
        b = r.pg.y - r.ld.y;

        return a*b;

    }

// c)
    int ifPointBelongsToRectangle(Rectangle r, pXY p){

        if((p.x < r.pg.x) && (p.y < r.pg.y) && (p.x > r.ld.x) && (p.y > r.ld.y))
           return 0;
        else
            return 1;

    }
