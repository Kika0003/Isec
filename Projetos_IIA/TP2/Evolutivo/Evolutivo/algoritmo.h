#ifndef EVOLUTIVO_ALGORITMO_H
#define EVOLUTIVO_ALGORITMO_H
#define MAX_OBJ 500		// Numero maximo de objectos

// EStrutura para armazenar parametros
struct info
{
    // Tamanho da popula��o
    int     popsize;
    // Probabilidade de muta��o
    float   pm;
    // Probabilidade de recombina��o
    float   pr;
    // Tamanho do torneio para sele��o do pai da pr�xima gera��o
    int     tsize;
    // N�mero de objetos que se podem colocar na mochila
    int     numGenes;
    // N�mero de gera��es
    int     numGenerations;

};

// Individuo (solu��o)
typedef struct individual chrom, *pchrom;

struct individual
{
    // Solucao (objetos que estao dentro da mochila)
    int     p[MAX_OBJ];
    // Valor da qualidade da solucao
    float   fitness;
    // 1 se for uma solucao valida e 0 se nao for
    int     valido;
};

void tournament(pchrom, struct info, pchrom);
void tournament_geral(pchrom, struct info, pchrom);

void genetic_operators(pchrom, struct info, pchrom);
void crossover(pchrom parents, struct info d, pchrom offspring);
void recombinacao_dois_pontos_corte(pchrom parents, struct info d, pchrom offspring);
void recombinacao_uniforme(pchrom, struct info, pchrom);


void mutation(pchrom, struct info);
void mutacao_por_troca(pchrom offspring, struct info d);


#endif //EVOLUTIVO_ALGORITMO_H
