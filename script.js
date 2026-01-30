const div=document.getElementById("container");
function customizeGrid() {
    const size=parseInt(prompt("Type value to create grid. Maximum: 100 ","20"));
    if(size<=100){
        div.innerHTML=" ";
        let totalSize= size * size;
        for(let i=0;i<totalSize;i++){
            const cell= document.createElement('div');
            cell.classList.add('cell');
            cell.style.flex=`1 1 ${100/size}% `;
            div.append(cell);
        }
    document.querySelectorAll(".cell").forEach(cell=>{
    cell.addEventListener("mousemove",function(){
    this.style.backgroundColor="red";});  
    }); 
}
}
function rainbowColorFiller(){
    document.querySelectorAll(".cell").forEach(cell=>{
    cell.addEventListener("mousemove",function(){
    this.style.backgroundColor=randomColorGenerator();});  
    }); 
}
function randomColorGenerator(){
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}