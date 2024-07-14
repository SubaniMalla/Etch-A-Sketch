function createGrid(gridNumber=16){
    const container = document.querySelector("#container");
    for(let i =0;i<gridNumber;i++){
        const row =document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<gridNumber; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    drawOnHover();
    changeGridSize();
}


function drawOnHover(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.addEventListener("mouseover", ()=>{
            box.setAttribute("style","background-color:blue;");
        });
    });
}

function changeGridSize(){
    let gridNumber;
    const container=document.querySelector("#container");
    const gridChange = document.querySelector("#gridChange");
    const rows=document.querySelectorAll(".row");

    gridChange.addEventListener("click",()=>{
            rows.forEach((row)=>{
                container.removeChild(row);
            });
        gridNumber=prompt("Enter the number of squares your want");
        createGrid(gridNumber);
    });
}

createGrid();

    