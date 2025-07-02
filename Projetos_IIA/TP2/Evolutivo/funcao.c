#include "algoritmo.h"
#include "funcao.h"
#include "utils.h"


float eval_individual(int sol[], struct info d, int *mat, int *v){
    int total = 0;
    int i, j;
    int zeros=0;

    for (i = 0; i < d.numGenes; i++){
        if (sol[i] == 0)
        {
            for (j = 0; j < d.numGenes; j++)
                if (sol[j] == 0 && *(mat+i*d.numGenes+j) == 1)
                    total++; //total Ã© o numero de ligaÃ§oes entre os membros dos grupos de 0's
        }
    }
    if(total == 0){

        for(i=0;i<d.numGenes;i++){
            if(sol[i] == 0){
                zeros++;
            }
        }
        *v = 1;
        return zeros;//numero de zeros;
    }
    else{
        *v = 0;
        return -total;
    }
}


float eval_individual_reparado1(int sol[], struct info d, int * mat, int *v){
    int total = 0;
    int i, j;
    int zeros=0;

    for (i = 0; i < d.numGenes; i++){
        if (sol[i] == 0)
        {
            for (j = 0; j < d.numGenes; j++)
                if (sol[j] == 0 && * (mat+i*d.numGenes+j) == 1) {
                    total++; //total é o numero de ligaçoes entre os membros dos grupos de 0's
                }
        }
    }
    if(total == 0){
        //conta os zeros
        //ciclo for para contar os zeros
        for(i=0;i<d.numGenes;i++){
            if(sol[i] == 0){
                zeros++;
            }
        }
        *v = 1;
        return zeros;//numero de zeros;
    }
    else{
        while (total != 0) {
            do{
                i = random_l_h(0, d.numGenes-1);
            }
            while(sol[i] != 0);
            sol[i] = 1;
            total = 0;
            for (i = 0; i < d.numGenes; i++){

                if (sol[i] == 0)
                {
                    for (j = 0; j < d.numGenes; j++)
                        if (sol[j] == 0 && * (mat+i*d.numGenes+j) == 1) {
                            total++; //total é o numero de ligaçoes entre os membros dos grupos de 0's
                        }
                }
            }
        }
        zeros = 0;
        for(i=0;i<d.numGenes;i++){
            if(sol[i] == 0){
                zeros++;
            }
        }
        *v = 1;
        return zeros;
    }
}

void evaluate(pchrom pop, struct info d, int *mat)
{
    int i;

    for (i=0; i<d.popsize; i++)
        pop[i].fitness = eval_individual_reparado1(pop[i].p, d, mat, &pop[i].valido);

}



