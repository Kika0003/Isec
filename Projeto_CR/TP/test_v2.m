clear all;
close all;

% Carrega o dataset
S = readmatrix('Test.csv', 'Delimiter', ';', 'DecimalSeparator', '.');
load('nn_train_alt.mat','net'); % Carrega os dados do arquivo

p = S(:, 3:end)';  %Todas as colunas da 3a até a ultima
t = S(:, 2)'; %A coluna target é a 2 (Aonde indica a classificaçao da hepatite)
t_encoded = onehotencode(t,1,'ClassNames',0:4);

accuracy_teste=[]; %criou um vector para guardar os dados

%Inicio de ciclo para 10 repeticoes
for rep = 1 : 10


% SIMULAR A REDE APENAS NO CONJUNTO DE TESTE
TInput = net(:, 3:end)';
TTargets = net(:, 2)';
t_encoded = onehotencode(TTargets,1,'ClassNames',0:4);

out = sim(net, TInput);

%Calcula e mostra a percentagem de classificacoes corretas no conjunto de teste
r=0;
for i=1:size(tr.testInd,2)               % Para cada classificacao  
  [a b] = max(out(:,i));          %b guarda a linha onde encontrou valor mais alto da saida obtida
  [c d] = max(TTargets(:,i));  %d guarda a linha onde encontrou valor mais alto da saida desejada
  if b == d                       % se estao na mesma linha, a classificacao foi correta (incrementa 1)
      r = r+1;
  end
end

accuracy = r/size(tr.testInd,2)*100;
accuracy_teste=[accuracy_teste accuracy];
end
fprintf('Accuracy teste %f\n', mean(accuracy_teste))
