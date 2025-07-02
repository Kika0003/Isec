function train_v2()

clear all;
close all;

% Carrega o dataset
S = readmatrix('Train_alt.csv', 'Delimiter', ',', 'DecimalSeparator', '.');

accuracy_total=[]; %criou um vector para guardar os dados
accuracy_teste=[]; %criou um vector para guardar os dados

p = S(:, 3:end)';  %Todas as colunas da 3a até a ultima
t = S(:, 2)'; %A coluna target é a 2 (Aonde indica a classificaçao da hepatite)
t_encoded = onehotencode(t,1,'ClassNames',0:4);


%Inicio de ciclo para 10 repeticoes
for rep = 1 : 10

net = feedforwardnet([5]);
%net = feedforwardnet([5 5]);
%net= feedforwardnet([10 10]);

% COMPLETAR A RESTANTE CONFIGURACAO
net.layers{1:end-1}.transferFcn = 'tansig';
net.layers{end}.transferFcn = 'purelin';
%net.layers{end}.transferFcn = 'logsig';

net.trainFcn = 'trainlm'; %Levenberg-Marquardt 
%net.trainFcn = 'traingdx';
%net.trainFcn = 'traingdm';
%net.trainFcn = 'trainscg';
%net.trainFcn = 'traincgf';
%net.trainFcn = 'trains';

net.divideFcn = 'dividerand';
%net.divideParam.trainRatio = 70;
%net.divideParam.valRatio = 10;
%net.divideParam.testRatio = 20;

% TREINAR
[net,tr] = trainlm(net, p, t_encoded);
%[net,tr] = traingdx(net, p, t_encoded);
%[net,tr] = traingdm(net, p, t_encoded);
%[net,tr] = trainscg(net, p, t_encoded);
%[net,tr] = traincgf(net, p, t_encoded);
%[net,tr] = trains(net, p, t_encoded);

% SIMULAR
out = sim(net, p);

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

end 
fprintf('Accuracy total (nos 10 exemplos) %f\n', mean(accuracy_total))
save('nn_train_alt.mat', 'net');
