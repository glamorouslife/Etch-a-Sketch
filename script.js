const container= document.querySelector(".container")


//clear the existing squares

function clearSquares(){
    container.innerHTML="";
}

clearSquares();

// creating the grids of 16*16
function createDiv(row, column){
    for (let i=0;i<(row*column); i++) {
        const newdiv=document.createElement("div");
        newdiv.classList.add("square");
        container.appendChild(newdiv);
     
}   
}


createDiv(16, 16);

function HoverEffect(){
// select all squares
const squares= document.querySelectorAll(".square");
// add teh mouseover event to each square
squares.forEach(square => {
    square.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor="blue";
    });
})  
}
 HoverEffect();

//function for grid size input

function clearSquares(){
    container.innerHTML="";
}

function gridSizeInput() {
    numberOfSquares= prompt("enter the number of squares per side :");
    while (numberOfSquares >100){
        console.log("you should enter a number less than 100");
        numberOfSquares= prompt("enter the number of squares per side :");
    }
    clearSquares();
    createDiv(numberOfSquares, numberOfSquares);
    HoverEffect()
    return numberOfSquares

}

HoverEffect();
//function for clicking button and adjust the number of squares based on the given number
const button= document.querySelector("#resize-btn");
button.addEventListener("click", gridSizeInput);


//adjusting width based on the number of squares given 
const widthOfSquares= 960 / numberOfSquares;

// adjust the width of each square

squares.forEach(square=>{
    square.style.width=`${widthOfSquares}px`;
    square.style.height= `${widthOfSquares}px`;
});






