%MEulerM  M�todo N�merico para resolver um PVI: MEulerM (Euler melhorado)
%   y = MEulerM(f,a,b,n,y0) M�todo num�rico para a resolu��o de um PVI
%
%INPUT:
%   f - Fun��o da equa��o diferencial, em t e y
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor Inicial do PVI (Condi��o)
%
%OUTPUT: 
%   y - vetor das solu��es aproximadas
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MEulerM(f,a,b,n,y0)
    h = (b-a)/n;                     % Tamanho de cada subintervalo (passo)
    
    t = a:h:b;                       % Aloca��o de mem�ria - vetor das abcissas
    y = zeros(1, n+1);               % Aloca��o de mem�ria - vetor das ordenadas
    
   
    y(1) = y0;                       % O primeiro valor de y � sempre y0 (condi��o inicial do pvi)
    
    for i=1:n                        % O n�mero de itera��es vai ser igual a n
        k1 = f(t(i),y(i));           % Inclina��o no in�cio do intervalo
        k2 = f(t(i+1), y(i) + k1*h); % Inclina��o no fim do intervalo
        k = 0.5*(k1+k2);             % C�lculo da m�dia das inclina��es
        y(i+1)=y(i)+h*k;             % Pr�ximo valor aproximado da solu��o do problema original
    end
end