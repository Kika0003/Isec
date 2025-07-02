#ifndef TREPACOLINAS_UTILS_H
#define TREPACOLINAS_UTILS_H
void logtofile(int num_iter,int best ,float mbf);
int* init_dados(char *nome, int *n);
void gera_sol_inicial(int *sol, int v);
void escreve_sol(int *sol, int vert);
void substitui(int a[], int b[], int n);
void init_rand();
int random_l_h(int min, int max);
void imprime_matriz(int *grafo, int vert);
#endif //TREPACOLINAS_UTILS_H
