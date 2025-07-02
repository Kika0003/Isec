%MPM  M�todo N�merico para resolver um PVI: Ponto M�dio
%   y = NPM(f,a,b,n,y0) M�todo num�rico para a resolu��o de um PVI
%
%INPUT:
%   f - fun��o da equa��o diferencial
%   [a,b] - limites do intervalo da varivel t
%   n - Numero de sub-intervalos
%   y0 - Condi��o Inicial
%
%OUTPUT: 
%   y - vector das solu��es aproximadas
%
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MPM(f,a,b,n,y0)

    h = (b-a)/n;                                                   
    % Tamanho de cada sub-intervalo/passo

    t = a:h:b;    
    % Vetor das abcissas
    
    y = zeros(1, n+1);                                             
    % vetor das ordenadas

    y(1) = y0;                                                    
    % atribuir o primeiro valor das ordenadas a condi��o inicial

    for i=1:n  
        % n � o numero de itera��es

        k1 = 0.5 * f(t(i), y(i));                                   
        % variavel auxiliar

        y(i+1) = y(i) + h*f(t(i) + h/2, y(i) + h*k1);
        % ponto m�dio expl�cito

        y(i+1) = y(i) + h*f(t(i) + h/2, 0.5*(y(i) + y(i+1)));       
        % ponto m�dio impl�cito 

    end


