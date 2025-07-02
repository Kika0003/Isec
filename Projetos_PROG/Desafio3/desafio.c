//
// Created by kikav on 6/3/2025.
//



#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "desafio.h"

// Nome: Carolina Vilas Boas Veloso
// Número: 2021140780

void eliminaLista(pno lista){
    pno aux;

    while(lista != NULL){
        aux = lista;
        lista = lista->prox;
        free(aux);
    }
}

pno criaLista(no tab[], int tam){
    int i;
    pno lista=NULL, novo;

    for(i=tam-1; i>=0; i--){
        novo = malloc(sizeof(no));
        if(novo == NULL){
            eliminaLista(lista);
            return NULL;
        }
        *novo = tab[i];
        novo->prox = lista;
        lista = novo;
    }
    return lista;
}

void mostraLista(pno lista){
    printf("{ ");
    while(lista != NULL){
        printf("%s-%d", lista->id, lista->v);
        lista = lista->prox;
        if(lista!=NULL)
            printf(",\t");
    }
    printf("}");
}


pno desafio3(pno lista){
    pno atual, ant, maiorNo = NULL, antMaior = NULL;
    int maior = 0;
    int contNo=0;

    if(lista == NULL){
        return NULL;
    }

    pno minNo = lista, minAnt = NULL;
    atual = lista;
    ant = NULL;

    while (atual != NULL){
        if(atual->v < minNo->v){
            minNo = atual;
            minAnt = ant;
        }
        ant = atual;
        atual = atual->prox;
    }

    if(minNo->prox != NULL){
        if(minAnt != NULL){
            minAnt->prox = minNo->prox;
        } else {
            lista = minNo->prox;
        }

        pno fim = lista;
        while(fim->prox != NULL){
            fim = fim->prox;
        }
        minNo->prox = NULL;
        fim->prox = minNo;
    }

    return lista;
}