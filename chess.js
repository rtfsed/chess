const black = document.querySelectorAll(".piece.black");
const white = document.querySelectorAll(".piece.white");
const container = document.getElementById("conteiner")
const blackBack = getComputedStyle(black[0]).backgroundColor; 
const whiteBack = getComputedStyle(white[0]).backgroundColor;
let a = "white";
let selectedPiece = null;
let finish = true;
let l1 = 0;
let l2 = 0;
let l3  =0;
let l4 = 0;
let k1 =0;
let k2 =0;
const chessboard = document.querySelector(".chessboard");
console.log(blackBack);
console.log(whiteBack);
let move = [];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const squares = chessboard.querySelectorAll('.square');
const numRows = 8; 
const numCols = 8; 

squares.forEach((square, index) => {
    
    const row = numRows - Math.floor(index / numCols); 
    const column = columns[index % numCols];

    
    const button = square.querySelector('.piece');
    button.id = column + row;
});
let lb1 = document.getElementById("a1"); 
let lb2 = document.getElementById("h1");
let lc1 = document.getElementById("a8");
let lc2 = document.getElementById("h8");


document.querySelectorAll('.piece').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});






function handleCellClick(event) {
    const cell = event.target;
    
    if(finish)
    {if (!selectedPiece) {
        if (cell.textContent !== " ") {
            selectedPiece = cell;
           
        }
    } else {
        
        console.log(selectedPiece);
        console.log(cell);
        

     if (selectedPiece !== cell) {
        if(selectedPiece.textContent==="♙"||
                selectedPiece.textContent==="♔"||
                selectedPiece.textContent==="♕"||
                selectedPiece.textContent==="♖"||
                selectedPiece.textContent==="♗"||
                selectedPiece.textContent==="♘"){
                  if(cell.textContent==="♔"||
                     cell.textContent==="♙"||
                     cell.textContent==="♕"||
                     cell.textContent==="♖"||
                     cell.textContent==="♗"||
                     cell.textContent==="♘"){
                selectedPiece = null;
                return;}}
                
            else if(selectedPiece.textContent==="♟"||
            selectedPiece.textContent==="♚"||
            selectedPiece.textContent==="♛"||
            selectedPiece.textContent==="♜"||
            selectedPiece.textContent==="♝"||
            selectedPiece.textContent==="♞"){
                if(cell.textContent==="♚"||
                   cell.textContent==="♟"||
                   cell.textContent==="♛"||
                   cell.textContent==="♜"||
                   cell.textContent==="♝"||
                   cell.textContent==="♞"){
                    selectedPiece = null;
                    return;}}
                    
                const selectedPieceSymbol = selectedPiece.textContent;
                const cellSymbol = cell.textContent;
                const selectedRow = parseInt(selectedPiece.id[1]);
                const selectedColumn = selectedPiece.id[0].charCodeAt(0) - 'a'.charCodeAt(0);
                const targetRow = parseInt(cell.id[1]);
                const targetColumn = cell.id[0].charCodeAt(0) - 'a'.charCodeAt(0);
                const rowDifference = Math.abs(targetRow - selectedRow);
                const colDifference = Math.abs(targetColumn - selectedColumn);
            
            
function isPathClear(selectedColumn, selectedRow, targetColumn, targetRow) {
                if (selectedColumn === targetColumn) {
                for (let row = Math.min(selectedRow, targetRow) + 1; row < Math.max(selectedRow, targetRow); row++) {
                    const cell = document.getElementById(String.fromCharCode(selectedColumn + 'a'.charCodeAt(0)) + row);
                    if (cell.textContent !== " ") {
                        return false;
                    }
                }
            }
            
            else if (selectedRow === targetRow) {
                for (let column = Math.min(selectedColumn, targetColumn) + 1; column < Math.max(selectedColumn, targetColumn); column++) {
                    const cell = document.getElementById(String.fromCharCode(column + 'a'.charCodeAt(0)) + selectedRow);
                    if (cell.textContent !== " ") {
                        return false;
                    }
                }
            }
            else if (colDifference === rowDifference) {
                const rowDirection = (targetRow > selectedRow) ? 1 : -1;
                const colDirection = (targetColumn > selectedColumn) ? 1 : -1;
            
                for (let i = 1; i < rowDifference; i++) {
                    const column = selectedColumn + i * colDirection;
                    const row = selectedRow + i * rowDirection;
                    const cell = document.getElementById(String.fromCharCode(column + 'a'.charCodeAt(0)) + row);
                    if (cell.textContent !== " ") {
                        return false;
                    }
                }
            }
            return true;
            }             

            if (a === "black" && selectedPieceSymbol === "♟" && cellSymbol === " " && colDifference === 0&&((rowDifference===1)||(rowDifference===2 && selectedRow===7))&&(targetRow<selectedRow)) {
                if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)){
                    if(peshka(targetRow)){
                        cell.textContent = selectedPieceSymbol;
                        selectedPiece.textContent = " ";
                        switchc();
                        move.push(selectedPiece.id,cell.id);
                        console.log(move);
                        
                        a = "white" ; 
                    }
               else{ 
                cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a = "white";
                 } 
                 } 
                }               
            else if (a === "white" && selectedPieceSymbol === "♙" && cellSymbol === " " && colDifference === 0&&((rowDifference===1)||(rowDifference===2 && selectedRow===2))&&(targetRow>selectedRow)) {
                if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)){
                    if(peshka(targetRow)){
                        cell.textContent = selectedPieceSymbol;
                        selectedPiece.textContent = " ";
                        switchb();
                        move.push(selectedPiece.id,cell.id);
                console.log(move);
                       
                        a = "black";
                    }
                    
                else{cell.textContent = selectedPieceSymbol;

                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);  
                    a = "black";
                }
                }    
            }
            else if(a === "black" && selectedPieceSymbol === "♟" && cellSymbol !== " " &&( colDifference === 1 && rowDifference==1)&&(targetRow<selectedRow)){
                if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)){
                    if(peshka(targetRow)){
                        cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                        switchc();
                        move.push(selectedPiece.id,cell.id);
                console.log(move);
                        a = "white" ; 
                    }
                    else if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
            }
                }  
            }
            else if(a === "white" && selectedPieceSymbol === "♙" && cellSymbol !== " " &&( colDifference === 1&& rowDifference===1)&&(targetRow>selectedRow)){
                if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)){
                    if(peshka(targetRow)){
                        cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                        switchb();
                        move.push(selectedPiece.id,cell.id);
                console.log(move);
                        a = "black";
                        
                    }
                    else if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                }
                }   
            }
            else if (a === "white" && selectedPieceSymbol === "♙"&&passant()){
                
                cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                a = "black"; 
                 
            }
            else if(a === "black" && selectedPieceSymbol === "♟" &&passant()){
                
                cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                a = "white";
            }
        else if(a ==="black"&&selectedPieceSymbol === "♜"&&((colDifference === 0 && rowDifference!==0)||(rowDifference===0 && colDifference!==0))){
            if (isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
                if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{
                    if(selectedPieceSymbol===lc1.textContent){
                        l3 = 1;
                    }
                    else if(selectedPieceSymbol===lc2.textContent){
                        l4 = 1;
                    }
                cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
                    
            }
                    
            }
        }
        else if(a ==="white"&&selectedPieceSymbol === "♖"&&((colDifference === 0 &&rowDifference!==0)||(rowDifference===0&&colDifference!==0))){
            if (isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
                if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{
                    if(selectedPieceSymbol===lb1.textContent){
                        l1=1;
                    }
                    else if(selectedPieceSymbol===lb2.textContent){
                        l2=1;
                    }
                cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                    
                }
            }
        }
        else if(a ==="black"&&selectedPieceSymbol === "♝"){
            if (isDiagonalMove(selectedColumn, selectedRow, targetColumn, targetRow) &&
                isOwnColorSquare(selectedColumn, selectedRow, cell)&&
                isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
                if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
            }
            } 
        }
        else if(a ==="white"&&selectedPieceSymbol === "♗"){
            if (isDiagonalMove(selectedColumn, selectedRow, targetColumn, targetRow) &&
                isOwnColorSquare(selectedColumn, selectedRow, cell)&&
                isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
                if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                }
        } 
        }
        
        else if(a ==="white"&&selectedPieceSymbol === "♕"){
            if (isDiagonalMove(selectedColumn, selectedRow, targetColumn, targetRow) &&
            isOwnColorSquare(selectedColumn, selectedRow, cell)&&
            isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
            if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                }
               
        }
        else if((colDifference === 0 &&rowDifference!==0)||(rowDifference===0&&colDifference!==0)){
            if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
                if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                }
        }
     }
    }
        else if(a ==="black"&&selectedPieceSymbol === "♛"){
            if (isDiagonalMove(selectedColumn, selectedRow, targetColumn, targetRow) &&
            isOwnColorSquare(selectedColumn, selectedRow, cell)&&
            isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
            if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
            }
        }
        else if((colDifference === 0 &&rowDifference!==0)||(rowDifference===0&&colDifference!==0)){
        if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
            if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
            }
            }
        }
    }
        else if(a ==="black"&&selectedPieceSymbol === "♞"){
            if(horse(selectedColumn, selectedRow, targetColumn, targetRow)){
            if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
            }}
        }    
        else if(a ==="white"&&selectedPieceSymbol === "♘"){
            if(horse(selectedColumn, selectedRow, targetColumn, targetRow)){
            if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                }
            }
        }
        else if(a ==="black"&&selectedPieceSymbol === "♚"){
            if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
            if(king(selectedColumn, selectedRow, targetColumn, targetRow)){
                if(cellSymbol==="♔"){
                        
                        finish = false;
                        alert("Black Victory")
                    }
                
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="white";
                    k2 = 1;
            }}
        }}
        else if(a ==="white"&&selectedPieceSymbol === "♔"){
            if(isPathClear(selectedColumn, selectedRow, targetColumn, targetRow)) {
            if(king(selectedColumn, selectedRow, targetColumn, targetRow)){
                if(cellSymbol==="♚"){
                        
                        finish=false;
                        alert("White Victory")
                    }
                else{cell.textContent = selectedPieceSymbol;
                selectedPiece.textContent = " ";
                move.push(selectedPiece.id,cell.id);
                console.log(move);
                    a="black";
                    k1 =1;
                }}
        }}
        
        
        
        
        
        
        
        else {
            selectedPiece = null;
            return;
        }
       
container.addEventListener("click",switchhh);
function switchhh(event){
    console.log(123);
    if(targetRow===8)
    {let a = cell.id[0];
    let b = document.getElementById(a+'8');
    b.textContent = event.target.textContent;
}
else if (targetRow===1){
    let a = cell.id[0];
    let b = document.getElementById(a+'1');
    b.textContent = event.target.textContent;
}
container.remove();
    
}
function switchb(){
        
  let qbutton = document.createElement("button");
  qbutton.textContent = "♕";
  qbutton.id ="qbutton";
  container.appendChild(qbutton);
  

  let hbutton = document.createElement("button");
  hbutton.textContent = "♘";
  hbutton.id ="hbutton";
  container.appendChild(hbutton);
  

  let sbutton = document.createElement("button");
  sbutton.textContent = "♗";
  sbutton.id ="sbutton";
  container.appendChild(sbutton);
  

  let tbutton = document.createElement("button");
  tbutton.textContent = "♖";
  tbutton.id ="tbutton";
  container.appendChild(tbutton);
  
}
function passant(){
const rowD = targetRow - selectedRow; 
const colD = targetColumn - selectedColumn;  
if(selectedPieceSymbol === "♙"&&(rowD===1&&(colD===1||colD===-1))&&anPssant()){
    let pup;
    const targetC = cell.id[0]
    console.log(targetC);
    if(colD===1){
        
      pup = document.getElementById(targetC+'5');
      if(pup.textContent!=="♟")return false;  
      pup.textContent = " ";
    }
    else{
       
        pup = document.getElementById(targetC+'5');
        if(pup.textContent!=="♟")return false;  
        pup.textContent = " ";
    }
    return true, pup;  
}
else if(selectedPieceSymbol === "♟"&&(rowD===-1&&(colD===1||colD===-1))){
let pup;
const targetC = cell.id[0];
if(colD===1){
    
    pup = document.getElementById(targetC+'4'); 
    if(pup.textContent!=="♙")return false; 
    pup.textContent = " ";
    
}
else{
    pup = document.getElementById(targetC+'4'); 
    if(pup.textContent!=="♙")return false; 
    pup.textContent = " ";
    

}
return true;
}
}
function anPssant(){
    if(a==="white")
    {let sell = move[move.length - 2];
    let celll = move[move.length - 1];
    let rowws = sell[1];
    let cols = sell[0].charCodeAt(0) - 'a'.charCodeAt(0);
    let rowwc = celll[1];
    let colc = celll[0].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log(cols,rowws,colc,rowwc);
    if(cols===colc&&rowws-rowwc===2){
        return true;
    }}
    else if(a==="black")
    {let sell = move[move.length - 2];
    let celll = move[move.length - 1];
    let rowws = sell[1];
    let cols = sell[0].charCodeAt(0) - 'a'.charCodeAt(0);
    let rowwc = celll[1];
    let colc = celll[0].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log(cols,rowws,colc,rowwc);
    if(cols===colc&&rowws-rowwc===-2){
        return true;
    }}

    return false;
}
function switchc(){
    let qbutton = document.createElement("button");
  qbutton.textContent = "♛";
  qbutton.id ="qbuttonb";
  container.appendChild(qbutton);

  let hbutton = document.createElement("button");
  hbutton.textContent = "♞";
  hbutton.id ="hbuttonb";
  container.appendChild(hbutton);

  let sbutton = document.createElement("button");
  sbutton.textContent = "♝";
  sbutton.id ="sbuttonb";
  container.appendChild(sbutton);

  let tbutton = document.createElement("button");
  tbutton.textContent = "♜";
  tbutton.id ="tbuttonb";
  container.appendChild(tbutton);
        
        }
function peshka(targetRow,){
            if(selectedPiece.textContent==="♙"){
                if(targetRow===8){
                    return true;
                }
            }
            else if(selectedPiece.textContent==="♟"){
                if(targetRow===1){
                    return true;
                }
            }

            else{
                return false;
            }
        }
function king(selectedColumn, selectedRow, targetColumn, targetRow,selectedPieceSymbol){
            let rowDiff = targetRow-selectedRow;
            let colDiff = targetColumn-selectedColumn;
            
            if((colDiff===0&& rowDiff===1)||(colDiff===1&& rowDiff===0)||
            (colDiff===0&& rowDiff===-1)||(colDiff===-1&& rowDiff===0)||
            (colDiff===-1&& rowDiff===1)||(colDiff===1&& rowDiff===1)||
            (colDiff===-1&& rowDiff===-1)||(colDiff===1&& rowDiff===-1)
            ){
                return true;
            }
            else if(rowDiff===0&&(colDiff===2||colDiff===-2)){
                
                if(selectedPiece.textContent==="♔"){
                    
                    if(colDiff===2&&l2===0&&k1===0){
                        cell.textContent = selectedPiece.textContent;
                        selectedPiece.textContent = " ";
                        lb2.textContent = " ";
                        document.getElementById("f1").textContent = "♖"  
                            k1 = 1; 
                            a = "black"
                    }
                    else if(colDiff===-2&&l1===0&&k1===0){
                        cell.textContent = selectedPiece.textContent;
                        selectedPiece.textContent = " ";
                        lb1.textContent = " ";
                        document.getElementById("d1").textContent = "♖"  
                            a="black";  
                            k1 = 1; 
                    }
                    
                }
                else if(selectedPiece.textContent==="♚"){
                    if(colDiff===2&&l4===0&&k2===0){
                        cell.textContent = selectedPiece.textContent;
                        selectedPiece.textContent = " ";
                        lc2.textContent = " ";
                        document.getElementById("f8").textContent = "♜"  
                            
                            a="white";
                            k2 = 1;
                    }
                    else if(colDiff===-2&&l3===0&&k2===0){
                        cell.textContent = selectedPiece.textContent;
                        selectedPiece.textContent = " ";
                        lc1.textContent = " ";
                        document.getElementById("d8").textContent = "♜"  
                            a="white";
                            k2 = 1;  
                    }
                }
                
            }
            else{
                return false;
            }
        }
function horse(selectedColumn, selectedRow, targetColumn, targetRow){
            
           let rowDif = targetRow-selectedRow;
           let colDif = targetColumn-selectedColumn;
            if((colDif===2 &&rowDif===1)||(colDif===2 &&rowDif===-1)||
            (colDif===1 &&rowDif===-2)||(colDif===-1 &&rowDif===-2)||
            (colDif===-2 &&rowDif===1)||(colDif===-2 &&rowDif===-1)||
            (colDif===1 &&rowDif===2)||(colDif===-1 &&rowDif===2)){
              return true; 
            }
            else{
            return false;
        }}
function isDiagonalMove(selectedColumn, selectedRow, targetColumn, targetRow) {
            const colDifference = Math.abs(targetColumn - selectedColumn);
            const rowDifference = Math.abs(targetRow - selectedRow);
            return colDifference === rowDifference;
        }
        
function isOwnColorSquare(selectedColumn, selectedRow, cell) {
            const selectedSquareColor = (selectedRow + selectedColumn) % 2 === 0 ? "white" : "black";
            return cell.classList.contains(selectedSquareColor);
        }   
}
    selectedPiece = null;
}
}
}