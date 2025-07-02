%MRK4  M�todo N�merico para resolver um PVI: Runge-Kutta de ordem 4
%   y = MRK4(f,a,b,n,y0) M�todo num�rico para a resolu��o de um PVI
%
%INPUT:
%   f - Fun��o da equa��o diferencial, em t e y
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor Inicial do PVI (Condi��o)
%
%OUTPUT: 
%   y - vector das solu��es aproximadas
%
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MRK4(f,a,b,n,y0)
    h = (b-a)/n;                                        % Tamanho de cada subintervalo (passo)
    
    t = a:h:b;                                          % Aloca��o de mem�ria - vetor das abcissas
    y = zeros(1, n+1);                                  % Aloca��o de mem�ria - vetor das ordenadas
    
    y(1) = y0;                                          % O primeiro valor de y � sempre y0 (condi��o inicial do pvi)

    for i=1:n                                           % O n�mero de itera��es vai ser igual a n
        k1 = h*f(t(i), y(i));                           % Inclina��o no in�cio do intervalo
        k2 = h*f(t(i) + h/2, y(i) + 0.5*k1);            % Inclina��o no ponto m�dio do intervalo
        k3 = h*f(t(i) + h/2, y(i) + 0.5*k2);            % Inclina��o (novamente) no ponto m�dio do intervalo
        k4 = h*f(t(i+1), y(i) + k3);                    % Inclina��o no final do intervalo
        
        y(i + 1) = y(i) + (k1 + 2*k2 + 2*k3 + k4)/6;    % Pr�ximo valor aproximado da solu��o do problema original
    end
end
