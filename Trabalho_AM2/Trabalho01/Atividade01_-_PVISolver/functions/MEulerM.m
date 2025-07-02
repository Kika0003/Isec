%MEulerM  Método Númerico para resolver um PVI: MEulerM (Euler melhorado)
%   y = MEulerM(f,a,b,n,y0) Método numérico para a resolução de um PVI
%
%INPUT:
%   f - Função da equação diferencial, em t e y
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor Inicial do PVI (Condição)
%
%OUTPUT: 
%   y - vetor das soluções aproximadas
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function y = MEulerM(f,a,b,n,y0)
    h = (b-a)/n;                     % Tamanho de cada subintervalo (passo)
    
    t = a:h:b;                       % Alocação de memória - vetor das abcissas
    y = zeros(1, n+1);               % Alocação de memória - vetor das ordenadas
    
   
    y(1) = y0;                       % O primeiro valor de y é sempre y0 (condição inicial do pvi)
    
    for i=1:n                        % O número de iterações vai ser igual a n
        k1 = f(t(i),y(i));           % Inclinação no início do intervalo
        k2 = f(t(i+1), y(i) + k1*h); % Inclinação no fim do intervalo
        k = 0.5*(k1+k2);             % Cálculo da média das inclinações
        y(i+1)=y(i)+h*k;             % Próximo valor aproximado da solução do problema original
    end
end