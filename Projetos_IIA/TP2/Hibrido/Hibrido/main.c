#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "algoritmo.h"
#include "funcao.h"
#include "utils.h"


int main(int argc, char *argv[])
{
    char        nome_fich[100];
    struct info EA_param;
    int         mat[MAX_OBJ][MAX_OBJ], runs=30, i;
    pchrom      pop = NULL, parents = NULL;
    chrom       best_run, best_ever;
    int         gen_actual, r, inv;
    float       mbf = 0.0;


    EA_param.popsize = 100; //tamanho da população
    EA_param.pr = 0.7;     //probabilidade de recombinação
    EA_param.pm = 0.001;    //probabilidade de mutação
    EA_param.tsize = 2;    //tamanho do torneio
    EA_param.numGenerations = 2500;  //numero de geracoes



    printf("Nome do Ficheiro: ");
    gets(nome_fich);
    //printf("k = :");
    //scanf("%d", &runs);

    if (runs <= 0)
        return 0;

    init_rand();


    init_data(nome_fich, *mat, &EA_param);


    for (r=0; r<runs; r++)
    {
        printf("Repeticao %d\n",r);
        pop = init_pop(EA_param);
        evaluate(pop, EA_param, *mat);


        trepa_colinas(pop, EA_param, mat);

        best_run = pop[0];

        best_run = get_best(pop, EA_param, best_run);

        parents = malloc(sizeof(chrom)*EA_param.popsize);

        if (parents==NULL)
        {
            printf("Erro na alocacao de memoriaa\n");
            exit(1);
        }

        gen_actual = 1;
        while (gen_actual <= EA_param.numGenerations)
        {
            tournament(pop, EA_param, parents);


            genetic_operators(parents, EA_param, pop);

            evaluate(pop, EA_param, *mat);

            best_run = get_best(pop, EA_param, best_run);
            gen_actual++;
        }


        for (inv=0, i=0; i<EA_param.popsize; i++)
            if (pop[i].valido == 0)
                inv++;

        write_best(best_run, EA_param);
        printf("\nPercentagem Invalidos: %f\n", 100*(float)inv/EA_param.popsize);
        mbf += best_run.fitness;
        if (r==0 || best_run.fitness > best_ever.fitness)
            best_ever = best_run;
        free(parents);
        free(pop);
    }
    printf("\n\nMBF: %f\n", mbf/r);
    printf("\nMelhor solucao encontrada");
    write_best(best_ever, EA_param);
    logtofile(best_ever, EA_param,mbf/r);
    return 0;
}
