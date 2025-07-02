
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "parque.h"

// Nome: Carolina Vilas Boas Veloso
// Número: 2021140780


void libertaTudo(pCliente p){
    pCliente auxC;
    pAcesso auxA;

    while(p != NULL){
        while(p->lista != NULL){
            auxA = p->lista;
            p->lista = p->lista->prox;
            free(auxA);
        }
        auxC = p;
        p = p->prox;
        free(auxC);
    }
}

pCliente criaExemploED(cliente a[], acesso b[], int totC){
    int i, j, k=-1;

    pCliente lista = NULL, novoC;
    pAcesso novoA;

    for(i=0; i<totC; i++){
        k+=a[i].contador;
    }
    for(i=totC-1; i>=0; i--){
        novoC = malloc(sizeof(cliente));
        if(novoC == NULL){
            libertaTudo(lista);
            return NULL;
        }
        *novoC = a[i];
        novoC->prox = lista;
        lista = novoC;
        for(j=0; j<novoC->contador; j++){
            novoA = malloc(sizeof(acesso));
            if(novoA == NULL){
                libertaTudo(lista);
                return NULL;
            }
            *novoA = b[k--];
            novoA->prox = novoC->lista;
            novoC->lista = novoA;
        }
    }
    return lista;
}

void mostraTudo(pCliente p){
    pAcesso auxA;

    while(p != NULL){
        printf("\nUtilizador com id %d efetuou %d acessos\n", p->id, p->contador);
        auxA = p->lista;
        while(auxA != NULL){
            printf("Entrou as %2.2d:%2.2d. ", auxA->in.h, auxA->in.m);
            if(auxA->out.h == -1)
                printf("Ainda nao saiu do parque\n");
            else
                printf("Saiu as %2.2d:%2.2d\n", auxA->out.h, auxA->out.m);
            auxA = auxA->prox;
        }
        p = p->prox;
    }
}

pCliente desafio4(pCliente lista, hora *x, int id, int *valor){

    pCliente atual = lista, prev = NULL;
    int encontrou_prim_h = 0;

    x->h = -1;
    x->m = -1;
    *valor = 0;

    // Encontrar 1ª h entrada
    atual = lista;
    while (atual != NULL) {
        pAcesso acesso = atual->lista;
        while (acesso != NULL) {
            if (!encontrou_prim_h ||(acesso->in.h < x->h ||(acesso->in.h == x->h && acesso->in.m < x->m))) {
                x->h = acesso->in.h;
                x->m = acesso->in.m;
                encontrou_prim_h = 1;
            }
            acesso = acesso->prox;
        }
        atual = atual->prox;
    }


    atual = lista;
    prev = NULL;

    // Proc. id
    while (atual != NULL && atual->id != id) {
        prev = atual;
        atual = atual->prox;
    }

    if (atual != NULL) {
        pAcesso acesso = atual->lista;
        pAcesso prev_acesso = NULL;
        int tempo_total = 0;


        while (acesso != NULL) {
            pAcesso prox = acesso->prox;

            // se tem h entrada e saida
            if (acesso->out.h != -1) { //saiu

                int tempo_minutos = (acesso->out.h * 60 + acesso->out.m) -(acesso->in.h * 60 + acesso->in.m);
                tempo_total += tempo_minutos;

                // Remove acesso
                if (prev_acesso == NULL) {
                    atual->lista = prox;
                } else {
                    prev_acesso->prox = prox;
                }
                atual->contador--;
                free(acesso);
                acesso = prox;

            } else { //ainda n saiu
                prev_acesso = acesso;
                acesso = prox;
            }
        }

        *valor = tempo_total * 10;

        // remove cliente
        if (atual->contador == 0) {
            if (prev == NULL) {
                lista = atual->prox;
            } else {
                prev->prox = atual->prox;
            }
            free(atual);
        }
    }


    return lista;
}

