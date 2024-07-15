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
    draw();
    drawOnHover();
    changeGridSize();
    removeBorder();
    showBorder();
}

function draw() {
    const click = document.querySelector("#click");
    const hover = document.querySelector("#hover");

    click.addEventListener("click", drawOnClick);
    hover.addEventListener("click", drawOnHover);
}

function drawOnHover() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.removeEventListener("click", handleBoxClick);
        box.addEventListener("mouseover", handleBoxMouseOver);
    });
}

function drawOnClick() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.removeEventListener("mouseover", handleBoxMouseOver);
        box.addEventListener("click", handleBoxClick);
    });
}

function handleBoxMouseOver(event) {
    const color = pickColor();
    event.target.style.backgroundColor = color;
}

function handleBoxClick(event) {
    const color = pickColor();
    event.target.style.backgroundColor = color;
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
function generateRandomColor(){
    let r,g,b;
    r=(Math.floor(Math.random()*256));
    g=(Math.floor(Math.random()*256));
    b=(Math.floor(Math.random()*256));
    color=(r + ',' + 0 + ',' + b);
    return color;
}
let opacity=0;
function generateOpacity(){
    if(opacity>1){
        opacity=0;
    };
    opacity+=0.1;
    console.log(opacity);
    return opacity;
}
function pickColor(){
    const color=document.querySelector("#colorPick").value;
    return color;
}
function removeBorder(){
    const boxes = document.querySelectorAll(".box");
    const remove=document.querySelector("#remove");
    remove.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.style.border="none";
        });
    });    
}
function showBorder(){
    const boxes = document.querySelectorAll(".box");
    const remove=document.querySelector("#show");
    remove.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.style.border="1px solid #d9d9d9";
        });
    });    
}

createGrid();

    