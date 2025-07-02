%MENUMNPVI  Menu de M�todos Num�ricos para um PVI
%   y = MenuMNPVI(f,a,b,n,y0)
%   y'= f(t,y) com t=[a, b] e y(a)=y0 condi��o inicial  
%
%INPUT:
%   f - fun��o do 2.� membro da Equa��o Diferencial
%   [a, b] - extremos do intervalo da vari�vel independente t
%   n - n�mero de subintervalos ou itera��es do m�todo
%   y0 - condi��o inicial t=a -> y=y0
%OUTPUT: 
%   y - vector das solu��es aproxima��es
%
%   12/03/2020 - Arm�nioCorreia .: armenioc@isec.pt 

function y=MenuMNPVI(f,a,b,n,y0)
y=[];
menuMNPVI = 1;
while menuMNPVI~=5
    clc
    disp('--------------------------------------------------')
    disp('           M�todos Num�ricos para PVI             ')
    disp('--------------------------------------------------')
    menuMNPVI=menu('M�todos Num�ricos para PVI', ...
                   'M�todo de Euler',...
                   'M�todo de Euler Melhorado',...
                   'M�todo RK2',...
                   'M�todo RK4',...
                   'M�todo ODE45',...
                   'Outros',...
                   'Todos',...
                   'Sa�r');
    switch menuMNPVI
        case 1
              y = N_Euler(f,a,b,n,y0);
        case 2
              y = N_Heun(f,a,b,n,y0);
        case 3  
              %y=NRK2(f,a,b,n,y0);                
        case 4
              %y=NRK4(f,a,b,n,y0);  
        case 5
              %y=ODE45(f,b,a,n,y0);
        case 6
              %y=Outros(f,a,b,n,y0);                
    end
    disp('-----------Solu��o aproximada do PVI---------')
    disp(y)
    input('Prima numa tecla para continuar �')
end
            