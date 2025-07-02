%MEuler  M�todo Num�rico para resolver um PVI -> Euler
%Funcionalidades:
%                   Pr� Aloca��o de Mem�ria
%   y = MEuler(f,a,b,n,y0) Fun��o para resolver PVI (M�todo de Euler) 
%
%INPUT:
%   f - Fun��o da equa��o diferencial -> f(t,y)
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de itera��es
%   y0 - Valor inicial do PVI (condi��o)
%
%OUTPUT: 
%   y - vetor das solu��es aproxima��es
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MEuler(f,a,b,n,y0)
    h = (b-a)/n;                        % Tamanho de cada subintervalo
	
    t = a:h:b;                          % Aloca��o de mem�ria - Abcissas
    y = zeros(1, n+1);                  % Aloca��o de mem�ria - Ordenadas
	
    y(1) = y0;                          % Condi��o inicial do PVI
    
    for i=1:n                           % n = numero de itera��es
        y(i+1)=y(i)+h*f(t(i),y(i));     % Aproxima��o do m�todo de Euler para a i�sima itera��o
    end
end
