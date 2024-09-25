const container = document.querySelector(".container");

function newColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function newGrid(size, clear = true) {
    if(clear){
        container.innerHTML = "";
    }
    
    const boxSize = 560 / size;

    for(let i=1; i<= size; i++){
        for(let j=1;j<= size; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.height= `${boxSize}px`;
            box.style.width = `${boxSize}px`;
    
            //Hovering Effect
            box.addEventListener("mouseenter",() =>{
                box.style.backgroundColor = newColor();
            });
       
            container.appendChild(box);
    
        }
    }
}

newGrid(16,false);

const btn = document.querySelector("#myButton");
btn.addEventListener("click", () =>{
    let userInput = prompt("Enter the number of squares per side for a new grid (Max- 100):  ");
    
    if(isNaN(userInput) || userInput.trim() === "" || userInput > 100){
        alert("Please enter a valid number!");
    }else {
        newGrid(userInput);
    }
})