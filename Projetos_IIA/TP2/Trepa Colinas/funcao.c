#include "funcao.h"

int calcula_fit(int a[], int *mat, int vert) //PROF
{
    int total = 0;
    int i, j;

    for (i = 0; i < vert; i++)
        if (a[i] == 1)
        {
            for (j = i+1; j < vert; j++)
                if (a[j] == 1 && *(mat+i*vert+j) == 1)
                    total++;
        }
    return total;
}