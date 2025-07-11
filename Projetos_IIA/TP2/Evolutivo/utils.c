#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "algoritmo.h"
#include "utils.h"
#include <string.h>


void logtofile(chrom b, struct  info x,float mbf){
    FILE *out = fopen("output.txt", "a");


    fprintf(out, "%4.1f\t%.2f\t%d\t%.3f\t%.4f\t%d\t%d\t%d\n",b.fitness,mbf, x.popsize,	x.pr,	x.pm,	x.tsize,	x.numGenerations,x.numGenes);
    fclose(out);
}


void init_rand(){
    srand((unsigned)time(NULL));
}


void init_data(char *filename, int *mat, struct  info *x ){

    FILE    *f;
    char    str[100];
    int     i, j, lin, col;
    int     nrligacoes;

    // Leitura dos parametros do problema


    f=fopen(filename, "r");
    if(!f){
        printf("Erro no acesso ao ficheiro dos dados\n");
        exit(1);
    }
    while(strcmp(str,"edge"))
        fscanf(f,"%s",str);
    // Numero de vertices
    fscanf(f, "%d", &x->numGenes);
    if (x->numGenes > MAX_OBJ)
    {
        printf("Number of itens is superior to MAX_OBJ\n");
        exit(1);
    }

    // Numero de ligações
    fscanf(f, "%d", &nrligacoes);
    // Preenchimento da matriz
    for(i=0; i<x->numGenes; i++)
        for(j=0; j<x->numGenes; j++)
            *(mat+(x->numGenes)*i+j)=0;
    for(i=0; i<nrligacoes; i++)
    {
        fscanf(f, " e %d %d", &lin, &col);
        *(mat+x->numGenes*(lin-1)+col-1)=1;
        *(mat+x->numGenes*(col-1)+lin-1)=1;
    }
    fclose(f);

}

int flip(){
    if ((((float)rand()) / RAND_MAX) < 0.5)
        return 0;
    else
        return 1;
}


pchrom init_pop(struct info d){
    int     i, j;
    pchrom  indiv;

    indiv = malloc(sizeof(chrom)*d.popsize);
    if (indiv==NULL)
    {
        printf("Erro na alocacao de memoriaaa\n");
        exit(1);
    }
    for (i=0; i<d.popsize; i++)
    {
        for (j=0; j<d.numGenes; j++)
            indiv[i].p[j] = flip();
    }

    return indiv;
}

chrom get_best(pchrom pop, struct info d, chrom best){
    int i;

    for (i=0; i<d.popsize; i++)
    {
        if (best.fitness < pop[i].fitness)
            best=pop[i];
    }
    return best;
}

int random_l_h(int min, int max){
    return min + rand() % (max-min+1);
}

float rand_01(){
    return ((float)rand())/RAND_MAX;
}


void write_best(chrom x, struct info d){
    int i;

    printf("\nBest individual: %4.1f\n", x.fitness);
    for (i=0; i<d.numGenes; i++)
        printf("%d", x.p[i]);
    putchar('\n');
}
