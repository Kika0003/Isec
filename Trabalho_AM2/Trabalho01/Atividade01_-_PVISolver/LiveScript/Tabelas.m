%Tabelas  Função que permite a criação de tabelas com dados selecionados
%   [header, tabela] = Tabelas(escolha,strF,f,a,b,n,y0)
%
%INPUT:
%   escolha - Método escolhido
%   strF - Expressão do PVI (String)
%   f - Expressão do PVI
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor (condição) Inicial do PVI
%
%OUTPUT: 
%   header - Header da Tabela criada
%   tabela - Tabela com o método selecionado
%
%   Alunos:
%   14/04/21 - Luis Duarte .: a2021137789@isec.pt
%   14/04/21 - Bruno Guiomar .: a2021137345@isec.pt
%   14/04/21 - Carolina Veloso .: @isec.pt

function [header, tabela] = Tabelas(escolha,strF,f,a,b,n,y0)
    tabela = zeros(n+1,4);

    i = 3;

    h = (b-a)/n;            % Tamanho de cada subintervalo (passo)
    t = a:h:b;              % Alocação de memória - vetor das abcissas
    y = zeros(1, n+1);      % Alocação de memória - vetor das ordenadas
    
    header{1} = 'x';
    tabela(:,1) = t';

    sExata = dsolve(['Dy=', strF], ['y(',num2str(a),')=',num2str(y0)]);
    g = @(t) eval(vectorize(char(sExata)));
    y = g(t);
    header{2} = 'Exata';
    tabela(:,2) = y';
    switch escolha
        case 1                              %Método de Euler
            y = N_Euler(f, a, b, n, y0);                                                   
            header{i} = 'Euler';                        
            tabela(:,i) = y';
        case 2                              %Método de Euler Melhorado
            y = N_Heun(f, a, b, n, y0);                  
            header{i} = 'Heun';                         
            tabela(:,i) = y'; 
        case 3                              %Método RK2
            y = N_RK2(f, a, b, n, y0);                  
            header{i} = 'RK2';                         
            tabela(:,i) = y';
        case 4                              %Método RK4
            y = N_RK4(f, a, b, n, y0);                   
            header{i} = 'RK4';                         
            tabela(:,i) = y';
        case 5                              %Método ODE45
            y = MOde45(f, a, b, n, y0);               
            header{i} = 'ODE45';                        
            tabela(:,i) = y;   
        case 6                              %Método do Ponto Médio
            y = MPM(f, a, b, n, y0);                    
            header{i} = 'MidPoint';                     
            tabela(:,i) = y';  
    end
    
    while (i <= 4)
        header{i} = append('Erro ',header{i-1});

        tabela(:,i) = abs(tabela(:,i-1) - tabela(:,2));

        i = i+1;
end