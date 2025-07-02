function [retrieved_indexes, similarities, new_case] = retrieve(case_library, new_case, threshold)
    
    weighting_factors = [4 2 6 6 6 6 6 6 6 6 6 6];

    Category_sim = get_Category_similarities();
    sex_sim = get_sex_similarities();
    max_values = get_max_values(case_library);

    retrieved_indexes = [];
    similarities = [];

    to_remove=[];
    if ~isfield(new_case, 'Age')
        to_remove = [to_remove 1];
    end
    if ~isfield(new_case, 'Sex')
        to_remove = [to_remove 2];
    end
    if ~isfield(new_case, 'ALB')
        to_remove = [to_remove 3];
    end
    if ~isfield(new_case, 'ALP')
        to_remove = [to_remove 4];
    end
    if ~isfield(new_case, 'ALT')
        to_remove = [to_remove 5];
    end
    if ~isfield(new_case, 'AST')
        to_remove = [to_remove 6];
    end
    if ~isfield(new_case, 'BIL')
        to_remove = [to_remove 7];
    end
    if ~isfield(new_case, 'CHE')
        to_remove = [to_remove 8];
    end
    if ~isfield(new_case, 'CHOL')
        to_remove = [to_remove 9];
    end
    if ~isfield(new_case, 'CREA')
        to_remove = [to_remove 10];
    end
    if ~isfield(new_case, 'GGT')
        to_remove = [to_remove 11];
    end
    if ~isfield(new_case, 'PROT')
        to_remove = [to_remove 12];
    end
    
     weighting_factors(to_remove)=[];

    
    for i = 1:size(case_library, 1)
        
        distances = zeros(1, 12);
        
        % Calcula distâncias para cada atributo
        if isfield(new_case, 'age')
            distances(1,1) = calculate_linear_distance( ...
                                case_library{i,'Age'} / max_values('Age'), ...
                                new_case.age / max_values('Age'));
        end
               
        if isfield(new_case, 'sex')
            distances(1,2) = calculate_linear_distance( ...
                                case_library{i,'Sex'} / max_values('Sex'), ...
                                new_case.sex / max_values('Sex'));
        end

        if isfield(new_case, 'alb')
            distances(1,3) = calculate_euclidean_distance(case_library{i,'ALB'} / max_values('ALB'), ... 
                                new_case.alb / max_values('ALB'));
        end

        if isfield(new_case, 'alp')
            distances(1,4) = calculate_euclidean_distance(case_library{i,'ALP'} / max_values('ALP'), ... 
                                new_case.alp / max_values('ALP'));
        end

        if isfield(new_case, 'alt')
            distances(1,5) = calculate_euclidean_distance(case_library{i,'ALT'} / max_values('ALT'), ... 
                                new_case.alt / max_values('ALT'));
        end

        if isfield(new_case, 'ast')
            distances(1,6) = calculate_euclidean_distance(case_library{i,'AST'} / max_values('AST'), ... 
                                new_case.ast / max_values('AST'));
        end

        if isfield(new_case, 'bil')
            distances(1,7) = calculate_euclidean_distance(case_library{i,'BIL'} / max_values('BIL'), ... 
                                new_case.bil / max_values('BIL'));
        end

        if isfield(new_case, 'che')
            distances(1,8) = calculate_euclidean_distance(case_library{i,'CHE'} / max_values('CHE'), ... 
                                new_case.che / max_values('CHE'));
        end

        if isfield(new_case, 'chol')
            distances(1,9) = calculate_euclidean_distance(case_library{i,'CHOL'} / max_values('CHOL'), ... 
                                new_case.chol / max_values('CHOL'));
        end

        if isfield(new_case, 'crea')
            distances(1,10) = calculate_euclidean_distance(case_library{i,'CREA'} / max_values('CREA'), ... 
                                new_case.crea / max_values('CREA'));
        end

        if isfield(new_case, 'ggt')
            distances(1,11) = calculate_euclidean_distance(case_library{i,'GGT'} / max_values('GGT'), ... 
                                new_case.ggt / max_values('GGT'));
        end

         if isfield(new_case, 'prot')
            distances(1,12) = calculate_euclidean_distance(case_library{i,'PROT'} / max_values('PROT'), ... 
                                new_case.prot / max_values('PROT'));
        end
       
        distances(to_remove)=[];

        DG = (distances*weighting_factors')/sum(weighting_factors);
        final_similarity = 1 - DG;
        
        % Verifica se a similaridade está acima do limiar
        if final_similarity >= threshold
            retrieved_indexes = [retrieved_indexes i];
            similarities = [similarities final_similarity];
        end
        
        fprintf('Case %d out of %d has a similarity of %.2f%%...\n', i, size(case_library, 1), final_similarity * 100);
    end
end


function [Category_sim] = get_Category_similarities()

    Category_sim.categories = categorical({'0', '1', '2', '3','4'});

    Category_sim.similarities = [
        % 0=Blood Donor 1=Hepatitis 2=Fibrosis 3=Cirrhosis 
          1.0            0.4        0.2         0.5   % 0=Blood Donor
          0.4            1.0        0.3         0.6   % 1=Hepatitis
          0.2            0.3        1.0         0.3   % 2=Fibrosis
          0.5            0.6        0.3         1.0   % 3=Cirrhosis
    ];
end

function [sex_sim] = get_sex_similarities()
 
    sex_sim.categories = categorical({'m', 'f'});
    
    sex_sim.similarities = [
        % M         F  
         1          0.5      % M
         0.5        1        % F
    ];
end

function [max_values] = get_max_values(case_library)
    % Function to calculate the maximum values of all columns 
    key_set = {'Age', 'ALB', 'ALP', 'ALT', 'AST', 'BIL', 'CHE', 'CHOL', 'CREA', 'GGT', 'PROT'};
    value_set = {max(case_library{:,'Age'}), 
                max(case_library{:,'ALB'}), 
                max(case_library{:,'ALP'}),
                max(case_library{:,'ALT'}), 
                max(case_library{:,'AST'}), 
                max(case_library{:,'BIL'}), 
                max(case_library{:,'CHE'}), 
                max(case_library{:,'CHOL'}), 
                max(case_library{:,'CREA'}),
                max(case_library{:,'GGT'}), 
                max(case_library{:,'PROT'})};
    max_values = containers.Map(key_set, value_set);
end


function [res] = calculate_local_distance(sim, val1, val2)  
    i1 = find(sim.categories == val1);
    i2 = find(sim.categories == val2);
    res = 1.0 - sim.similarities(i1,i2);
end

function [res] = calculate_euclidean_distance(val1, val2)
    res = sqrt(sum((val1-val2).^2))/length(val1);  
end



