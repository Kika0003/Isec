
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "lista.h"

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


pno desafio3(pno lista, int lim){
    pno atual, ant, maiorNo = NULL, antMaior = NULL;
    int maior = 0;
    int contNo=0;

    if(lista == NULL){
        return NULL;
    }

    //passo1: eliminar os nos com id maior que lim
    while (lista != NULL && strlen(lista->id) > lim){ //inicio da lista
        pno temp = lista;
        lista = lista->prox;
        free(temp);
    }

    if(lista==NULL){
        return NULL;
    }

    ant=lista;
    atual=lista->prox;

    while (atual!=NULL){  //percorre resto da lista eliminado nos
        if(strlen(atual->id) > lim){
            ant->prox = atual->prox;
            free(atual);
            atual = ant->prox;
        }else{
            ant = atual;
            atual = atual->prox;
        }
    }


    //passo2->contar quantos nos ficaram e encontrar maior
    atual=lista;
    ant=NULL;

    while(atual!=NULL){
        contNo++;
        if(atual->v > maior){
            maior = atual->v;
            maiorNo = atual;
            antMaior = ant;
        }
        ant = atual;
        atual = atual->prox;
    }


    //se tivermos mais de 3 nos move maior para inicio
    if(contNo >=3 && maiorNo != lista){
        antMaior->prox = maiorNo->prox;
        maiorNo->prox = lista;
        lista=maiorNo; //atualiza
    }



    return lista;
}