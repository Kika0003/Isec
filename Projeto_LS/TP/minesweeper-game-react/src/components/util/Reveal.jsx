

export const revealed=(arr,x,y,newNonMines)=>{
    
  //células a serem reveladas
    let show=[];

  //Insere a célula clicada inicialmente no array
    show.push(arr[x][y]);

    while(show.length!==0){ //enquanto houver células na pilha para serem reveladas
        let one=show.pop(); // Remove uma célula da pilha
        let i=one.x;
        let j=one.y;

        // Se a célula ainda não foi revelada
        if(!one.revealed){
            newNonMines--; 
            one.revealed=true; // Marca a célula como revelada
        }
        // Se a célula clicada tiver um valor diferente de zero
        //não é necessário revelar as células adjacentes
        if(one.value !==0){
            break;
        }

        // Verifica as células adjacentes
        // top left 
        if(
            i>0 && 
            j>0 &&
            arr[i-1][j-1].value===0 &&
            !arr[i-1][j-1].revealed
        )
        {
            show.push(arr[i-1][j-1]);
        }

        // bottom right

        if(
            i<arr.length-1 &&
            j<arr[0].length-1 &&
            arr[i+1][j+1].value===0 &&
            !arr[i+1][j+1].revealed
        ){
            show.push(arr[i+1][j+1]);
        }

        // top right

        if(
            i>0 &&
            j<arr[0].length-1 &&
            arr[i-1][j+1].value===0 &&
            !arr[i-1][j+1].revealed
        ){
            show.push(arr[i-1][j+1]);
        }

        // bottom left 

        if(
            i<arr.length-1 &&
            j>0 &&
            arr[i+1][j-1].value===0 &&
            !arr[i+1][j-1].revealed
        ){
            show.push(arr[i+1][j-1]);
        }

        // top 
        if(
            i>0 &&
            arr[i-1][j].value===0 &&
            !arr[i-1][j].revealed 
        ){
            show.push(arr[i-1][j]);
        }

        // right

        if(
            j<arr[0].length-1 &&
            arr[i][j+1].value===0 &&
            !arr[i][j+1].revealed
        ){
            show.push(arr[i][j+1]);
        }

        // bottom

        if(
            i<arr.length-1 &&
            arr[i+1][j].value===0 &&
            !arr[i+1][j].revealed
        ){
            show.push(arr[i+1][j]);
        }

        // left

        if(
            j>0 &&
            arr[i][j-1].value===0 &&
            !arr[i][j-1].revealed
        ){
            show.push(arr[i][j-1]);
        }


       // Revela as células adjacentes manualmente, uma a uma

        if (
            i > 0 &&
            j > 0 &&
            !arr[i - 1][j - 1].revealed
          ) {
            //Top Left Reveal
      
            arr[i - 1][j - 1].revealed = true;
            newNonMines--;
          }
      
          if (j > 0 && !arr[i][j - 1].revealed) {
            // Left Reveal
            arr[i][j - 1].revealed = true;
            newNonMines--;
          }
      
          if (
            i < arr.length - 1 &&
            j > 0 &&
            !arr[i + 1][j - 1].revealed
          ) {
            //Bottom Left Reveal
            arr[i + 1][j - 1].revealed = true;
            newNonMines--;
          }
      
          if (i > 0 && !arr[i - 1][j].revealed) {
            //Top Reveal
            arr[i - 1][j].revealed = true;
            newNonMines--;
          }
      
          if (i < arr.length - 1 && !arr[i + 1][j].revealed) {
            // Bottom Reveal
            arr[i + 1][j].revealed = true;
            newNonMines--;
          }
      
          if (
            i > 0 &&
            j < arr[0].length - 1 &&
            !arr[i - 1][j + 1].revealed
          ) {
            // Top Right Reveal
            arr[i - 1][j + 1].revealed = true;
            newNonMines--;
          }
      
          if (j < arr[0].length - 1 && !arr[i][j + 1].revealed) {
            //Right Reveal
            arr[i][j + 1].revealed = true;
            newNonMines--;
          }
      
          if (
            i < arr.length - 1 &&
            j < arr[0].length - 1 &&
            !arr[i + 1][j + 1].revealed
          ) {
            // Bottom Right Reveal
            arr[i + 1][j + 1].revealed = true;
            newNonMines--;
          }
    }

    // Retorna o novo estado do tabuleiro após a revelação das células adjacentes e o número de bombas restantes
    return {arr,newNonMines}

}

//A função show.pop() é usada para remover e retornar o último elemento do array show. 
//Neste contexto, o array show é usada para armazenar as células que precisam ser reveladas. 
//Quando uma célula é retirada do array usando show.pop(), ela é revelada e as células adjacentes 
//são adicionadas ao array para serem reveladas posteriormente, se necessário. 