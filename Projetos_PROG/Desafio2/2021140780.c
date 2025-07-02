
#include "funcao.h"
#include <string.h>
#include <stdio.h>

// Nome: Carolina Vilas Boas Veloso
// Número: a2021140780

// Deve cumprir todas as regras de submissão (ver enunciado), caso contrário o trabalho poderá não ser avaliado

void mostraTab(projeto a[], int tam){
    int i;

    for(i=0; i<tam; i++){
        printf("Projeto %d:\n", i);
        printf("Inicio: %2.2d:%2.2d:%4d\tFinal: %2.2d:%2.2d:%4d\tDuracao: %d\n",
               a[i].inicio.dia, a[i].inicio.mes, a[i].inicio.ano,a[i].final.dia, a[i].final.mes, a[i].final.ano, a[i].duracao);
        printf("Palavras chave: {%s, %s, %s, %s}\n", a[i].palavras[0], a[i].palavras[1], a[i].palavras[2], a[i].palavras[3]);
        printf("Orcamento: %d\n\n", a[i].valor);
    }
}

// Escreva o codigo da função:
// void desafio2(projeto a[], int tam);

// Recebe:
// Tabela de estruturas do tipo projeto (a)
// Dimensão da tabela (tam)

// As estruturas armazenadas na tabela têm os campos inicio, final e pal completamente preenchidos.
// Para cada uma destas estruturas, a função deve preencher os campos duracao e valor:
// 1.Colocar no campo duracao o número de dias que decorreram entre o início e o final do projeto
// 2. Colocar no campo valor o orçamento total do projeto.

int contaVogais(const char *palavra) {
    int count = 0;
    for (int i = 0; palavra[i] != '\0'; i++) {
        char c = palavra[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    return count;
}

int vogal(char c) { //ve se carac é vogal
    return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

int cal_orcamento(char pal[]) { //conta vogais e calc orç
    int tam = strlen(pal);
    int cont = contaVogais(pal);

    if (cont == 2 && vogal(pal[0]) && vogal(pal[tam - 1])) {
        return 10;  // tem 2 vogais, uma no início e outra no final
    }
    else if (cont == 1) return 5;  // 1 vogal
    else if (cont > 3) return 1;   // + 3 vogais
    return 0;
}

int dias_mes(int mes, int ano) {
    int dias[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    // Verifica se o ano é bissexto
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        dias[1] = 29;
    }

    return dias[mes - 1];
}


int calc_duracao(data inicio, data fim) { //calc duracao proj
    int dias = 0;

    if (inicio.mes == fim.mes) {
        return fim.dia - inicio.dia;
    }

    // Soma dias do mes inic restantes
    dias += dias_mes(inicio.mes, inicio.ano) - inicio.dia;

    // Soma dias dos meses do meio
    for (int m = inicio.mes + 1; m < fim.mes; m++) {
        dias += dias_mes(m, inicio.ano);
    }

    // Soma dias do último mês até data fim
    dias += fim.dia;

    return dias;
}

void desafio2(projeto a[], int tam){
    for (int i = 0; i < tam; i++) {
        a[i].duracao = calc_duracao(a[i].inicio, a[i].final);

        int soma = 0;
        for (int j = 0; j < 4; j++) {
            soma += cal_orcamento(a[i].palavras[j]);
        }
        a[i].valor = soma;
    }
}


