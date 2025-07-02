%MEuler  Método Numérico para resolver um PVI -> Euler
%Funcionalidades:
%                   Pré Alocação de Memória
%   y = MEuler(f,a,b,n,y0) Função para resolver PVI (Método de Euler) 
%
%INPUT:
%   f - Função da equação diferencial -> f(t,y)
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de iterações
%   y0 - Valor inicial do PVI (condição)
%
%OUTPUT: 
%   y - vetor das soluções aproximações
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MEuler(f,a,b,n,y0)
    h = (b-a)/n;                        % Tamanho de cada subintervalo
	
    t = a:h:b;                          % Alocação de memória - Abcissas
    y = zeros(1, n+1);                  % Alocação de memória - Ordenadas
	
    y(1) = y0;                          % Condição inicial do PVI
    
    for i=1:n                           % n = numero de iterações
        y(i+1)=y(i)+h*f(t(i),y(i));     % Aproximação do método de Euler para a iésima iteração
    end
end
