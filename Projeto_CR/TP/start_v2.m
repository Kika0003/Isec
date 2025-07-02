function train_v2()

clear all;
close all;

% Carrega o dataset
S = readmatrix('Start.csv', 'Delimiter', ';', 'DecimalSeparator', '.');

accuracy_total=[]; %criou um vector para guardar os dados
erro_total=[]; %criou um vector para guardar os dados

p = S(:, 3:end)';  %Todas as colunas da 3a até a ultima
t = S(:, 2)'; %A coluna target é a 2 (Aonde indica a classificaçao da hepatite)
t_encoded = onehotencode(t,1,'ClassNames',0:4);


%Inicio de ciclo para 10 repeticoes
for rep = 1 : 10

net = feedforwardnet([10]);

%A RESTANTE CONFIGURACAO
net.layers{1:end-1}.transferFcn = 'tansig';
net.layers{end}.transferFcn = 'purelin';

net.trainFcn = 'trainlm'; %Levenberg-Marquardt

net.trainParam.epochs = 1000;

net.divideFcn = '';

% TREINAR
[net,tr] = train(net, p, t_encoded);

% SIMULAR
out = sim(net, p);

%Calcula e mostra a percentagem de classificacoes corretas no total dos exemplos
r=0;
for i=1:size(out,2)               % Para cada classificacao  
  [a b] = max(out(:,i));          %b guarda a linha onde encontrou valor mais alto da saida obtida
  [c d] = max(t_encoded(:,i));  %d guarda a linha onde encontrou valor mais alto da saida desejada
  if b == d                       % se estao na mesma linha, a classificacao foi correta (incrementa 1)
      r = r+1;
  end
end
accuracy = r/size(out,2)*100;
accuracy_total=[accuracy_total accuracy]
erro = perform(net, out,t_encoded);
erro_total=[erro_total erro]

end 
fprintf('Accuracy total (nos 10 exemplos) %f\n', mean(accuracy_total))
fprintf('Erro total (nos 10 exemplos) %f\n', mean(erro_total))