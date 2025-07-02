function [] = cbr()

    similarity_threshold = 0.5;

    data = readtable('Dataset1 - Hepatitis/Train.csv', 'Delimiter', '\t');

    % Processar valores de acordo com valores originais
    data.Category(strcmp(data.Category, '0=Blood Donor')) = {'0'};
    data.Category(strcmp(data.Category, '0s=suspect Blood Donor')) = {'1'};
    data.Category(strcmp(data.Category, '1=Hepatitis')) = {'2'};
    data.Category(strcmp(data.Category, '2=Fibrosis')) = {'3'};
    data.Category(strcmp(data.Category, '3=Cirrhosis')) = {'4'};
    data.Category(strcmp(data.Category, 'NA')) = {'-1'};

    data.Sex(strcmp(data.Sex, 'f')) = {'1'};
    data.Sex(strcmp(data.Sex, 'm')) = {'0'};

    % Converter os valores de string para numérico
    data.Category = str2double(data.Category);
    data.Sex = str2double(data.Sex);

    % Valores Category = -1 (NA)
    NA_rows = data(data.Category == -1, :);

    % Outros valores Category
    non_NA_rows = data(data.Category ~= -1, :);

    %disp(NA_rows)
    %disp(non_NA_rows)

    for i = 1:size(NA_rows, 1)

        current_NA_row = NA_rows(i,:);

        new_case.Age = current_NA_row.Age;
        new_case.Sex = current_NA_row.Sex;
        new_case.ALB = current_NA_row.ALB;
        new_case.ALP = current_NA_row.ALP;
        new_case.ALT = current_NA_row.ALT;
        new_case.AST = current_NA_row.AST;
        new_case.BIL = current_NA_row.BIL;
        new_case.CHE = current_NA_row.CHE;
        new_case.CHOL = current_NA_row.CHOL;
        new_case.CREA = current_NA_row.CREA;
        new_case.GGT = current_NA_row.GGT;
        new_case.PROT = current_NA_row.PROT;

        [retrieved_indexes, similarities, new_case] = retrieve(non_NA_rows, new_case, similarity_threshold);

        retrieved_cases = non_NA_rows(retrieved_indexes, :);

        retrieved_cases.Similarity = similarities';

        %disp(retrieved_cases);
        % Find the index of the highest similarity
        [max_similarity, max_index] = max(retrieved_cases.Similarity);


        % Trocar NA pelo valor categoria do resultado mais próximo
        for j = 1:size(data, 1)
            %current_row = data(j, :);

            if (data(j, :).ID == current_NA_row.ID)
                data(j, :).Category = retrieved_cases(max_index, :).Category;
            end
        end
        writetable(data, 'Train_alt.csv');
end

