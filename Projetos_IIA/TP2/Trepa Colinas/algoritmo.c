#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "algoritmo.h"
#include "funcao.h"
#include "utils.h"

void gera_vizinho(int a[], int b[], int n)
{
    int i, p1, p2;

    // Copia a soluÁ„o atual para a soluÁ„o vizinha
    for(i = 0; i < n; i++)
        b[i] = a[i];
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice com valor 0
    do
        p1 = random_l_h(0, n-1);
    while(b[p1] != 0);
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice com valor 1
    do
        p2 = random_l_h(0, n-1);
    while(b[p2] != 1);
    // Troca os valores dos vÈrtices das posiÁıes encontradas
    b[p1] = 1;
    b[p2] = 0;
}

void gera_vizinho2(int a[], int b[], int n)
{
    int i, p1, p2, p3, p4;

    // Copia a soluÁ„o atual para a soluÁ„o vizinha
    for(i = 0; i < n; i++)
        b[i] = a[i];
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice com valor 0
    do
        p1 = random_l_h(0, n-1);
    while(b[p1] != 0);
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice com valor 1
    do
        p2 = random_l_h(0, n-1);
    while(b[p2] != 1);
    // Troca os valores dos vÈrtices das posiÁıes encontradas
    b[p1] = 1;
    b[p2] = 0;
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice, que n„o seja igual a p2, com valor 0
    do
        p3 = random_l_h(0, n-1);
    while(b[p3] != 0 || p3 == p2);
    // Encontra aleatoriamente a posiÁ„o de um vÈrtice, que n„o seja igual a p1, com valor 1
    do
        p4 = random_l_h(0, n-1);
    while(b[p4] != 1 || p4 == p1);
    // Troca os valores dos vÈrtices das posiÁıes encontradas
    b[p3] = 1;
    b[p4] = 0;
}

int trepa_colinas(int sol[], int *mat, int vert, int num_iter)
{
    int *nova_sol, custo, custo_viz, i;

    // Aloca espaÁo em memÛria para guardar a nova soluÁ„o
    nova_sol = malloc(sizeof(int)*vert);
    // Caso n„o consiga fazer a alocaÁ„o, envia aviso e termina o programa
    if (nova_sol == NULL)
    {
        printf("Erro na alocacao de memoria");
        exit(1);
    }
    // Avalia soluÁ„o inicial
    custo = calcula_fit(sol, mat, vert);
    for(i = 0; i < num_iter; i++)
    {
        // Gera soluÁ„o vizinha
        //gera_vizinho(sol, nova_sol, vert);
        // Ficha 7 - 4.3
		gera_vizinho2(sol, nova_sol, vert);
        // Avalia soluÁ„o vizinha
        custo_viz = calcula_fit(nova_sol, mat, vert);
        if (custo_viz >= custo)
        {
            substitui(sol, nova_sol, vert);
            custo = custo_viz;
        }
    }
    // Liberta a memória usada para guardar a nova soluÁ„o
    free(nova_sol);
    // Devolve o custo da melhor solução encontrada
    return custo;
}