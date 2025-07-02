%MOde45 Metodo de ODE45 para Problemas de Valor Inicial (PVI)
%     y = MOde45(f, a, b, n, y0) Metodo numerico para a resolucao de um PVI
%     y' = f(t,y)  com t=[a,b] e y(a)=y0  Condicao inicial 
% INPUT:
%     f - função da equação diferencial
%     [a,b] - limites do intervalo da varivel t
%     n - Numero de subintervalos
%     y0 - condicao inicial
% OUTPUT:
%     y - vetor das aproximacoes discretas da solucao exata
%     [t,y] = ode45(f,t,y0)
%         
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MOde45(f,a,b,n,y0)
h = (b-a)/n;
%Tamanhao de cada passo/sub-intervalos

t = a:h:b;
%Vetor abcissas

[~,y] = ode45(f,t,y0);
%colocar os valores no vetor y

y = y';
%Mudar a orientação do vetor
end