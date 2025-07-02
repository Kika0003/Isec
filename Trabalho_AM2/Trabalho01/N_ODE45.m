%NODE45  M�todo N�merico para resolver um PVI: Fun��o ODE45 do MATLAB
%   y = N_ODE45(f,a,b,n,y0) M�todo num�rico para a resolu��o de um PVI
%
%INPUT:
%   f - Fun��o da equa��o diferencial, em t e y
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor (condi��o) Inicial do PVI
%
%OUTPUT: 
%   y - vetor das solu��es aproximadas
%
%%

function y = N_ODE45(f,a,b,n,y0)
    h = (b-a)/n;                        % Tamanho de cada subintervalo (passo)
    
    t = a:h:b;                          % Aloca��o de mem�ria - vetor das abcissas
    
    [~,y] = ode45(f, t, y0);            % Aproxima��o atrav�s da fun��o ODE45 e coloca��o dos valores no vetor y
    y = y';                             % Mudan�a da orienta��o do vetor
end