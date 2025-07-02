%NODE45  Método Númerico para resolver um PVI: Função ODE45 do MATLAB
%   y = N_ODE45(f,a,b,n,y0) Método numérico para a resolução de um PVI
%
%INPUT:
%   f - Função da equação diferencial, em t e y
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor (condição) Inicial do PVI
%
%OUTPUT: 
%   y - vetor das soluções aproximadas
%
%%

function y = N_ODE45(f,a,b,n,y0)
    h = (b-a)/n;                        % Tamanho de cada subintervalo (passo)
    
    t = a:h:b;                          % Alocação de memória - vetor das abcissas
    
    [~,y] = ode45(f, t, y0);            % Aproximação através da função ODE45 e colocação dos valores no vetor y
    y = y';                             % Mudança da orientação do vetor
end