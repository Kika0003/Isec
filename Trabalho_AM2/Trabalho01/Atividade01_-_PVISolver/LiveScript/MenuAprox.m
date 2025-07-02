%Interface Gráfica para escolha do método
%   z = MenuAprox(f,a,b,n,y0)
%
%INPUT:
%   f - Expressão do PVI
%   a - Limite esquerdo do intervalo
%   b - Limite direito do intervalo
%   n - Numero de sub-intervalos
%   y0 - Valor (condição) Inicial do PVI
%
%OUTPUT: 
%   z - vector das soluções aproximadas
%
%   Alunos:
%   15/04/2022 - Luis Duarte .: a2021137789@isec.pt
%   15/04/2022 - Bruno Guiomar .: a2021137345@isec.pt
%   15/04/2022 - Carolina Veloso .: a2021140780@isec.pt
%%

function z = MenuAprox(f,a,b,n,y0)
    y=[];

    option = 1;
    while option ~= 7
        clc

        title2 = "Método Solução Aproximada";
        buttons2 = ["Euler" "Euler Modificado" "RK2" "RK4" "Ponto Médio" "ODE45" "Voltar"];
        option = menu(title2,buttons2);
        switch option
            case 1
                disp("Método de Euler");
                y = MEuler(f,a,b,n,y0);
            case 2
                disp("Método de Euler Modificado");
                y = MEulerM(f,a,b,n,y0);
            case 3
                disp("Método RK2");
                y = MRK2(f,a,b,n,y0);
            case 4
                disp("Método RK4");
                y = MRK4(f,a,b,n,y0);
            case 5
                disp("Método do Ponto Médio");
                y = MPM(f,a,b,n,y0);
            case 6
                disp("Função ODE45");
                y = MOde45(f,a,b,n,y0);
            
        end

        disp(y);
    
end