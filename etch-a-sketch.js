function createGrid(gridNumber=16){
    let width,height;
    width=height=parseInt(((500/gridNumber)-1));
    const container = document.querySelector("#container");
    for(let i =0;i<gridNumber;i++){
        const row =document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<gridNumber; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width=width+"px";
            box.style.height=height+"px";
            row.appendChild(box);
        }
       
        container.appendChild(row);
    }
    drawOnHover();
    changeGridSize();
}


function drawOnHover(){
    let color;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.addEventListener("mouseover", ()=>{
            color = randomColor();
            box.style.backgroundColor = `rgb(${color})`;
        });
    });
}

function changeGridSize(){
    let gridNumber;
    const container=document.querySelector("#container");
    const gridChange = document.querySelector("#gridChange");
    const rows=document.querySelectorAll(".row");

    gridChange.addEventListener("click",()=>{
        do{
            gridNumber=parseInt(prompt("Enter the size of the grid max(60)"));
        }while(gridNumber>60);

        rows.forEach((row)=>{
                container.removeChild(row);
        });
            createGrid(gridNumber);
    });
}
function randomColor(){
    let r,g,b;
    r=(Math.floor(Math.random()*256));
    g=(Math.floor(Math.random()*256));
    b=(Math.floor(Math.random()*256));
    color=(r + ',' + g + ',' + b);
    return color;
    
}

createGrid();

    