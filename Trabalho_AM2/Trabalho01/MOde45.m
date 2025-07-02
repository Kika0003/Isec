function [t,y] = MOde45(f,a,b,n,y0)
h = (b-a)/n;
t = a:h:b;
[t,y] = ode45(f,t,y0);
end