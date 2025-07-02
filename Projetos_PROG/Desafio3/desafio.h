//
// Created by kikav on 6/3/2025.
//

#ifndef DESAFIO3_DESAFIO_H
#define DESAFIO3_DESAFIO_H

typedef struct dados no, *pno;

struct dados{
    char id[10];
    int v;
    pno prox;
};

void eliminaLista(pno lista);

pno criaLista(no tab[], int tam);

void mostraLista(pno lista);

pno desafio3(pno lista);


#endif //DESAFIO3_DESAFIO_H
