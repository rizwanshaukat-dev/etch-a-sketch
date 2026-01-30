const div=document.getElementById("container");
function customizeGrid() {
    const size=parseInt(prompt("Type value to create grid. Maximum: 100 ","20"));
    if(size<=100){
        let totalSize= size * size;
        for(let i=0;i<totalSize;i++){
            const cell= document.createElement('div')
            cell.classList.add('cell');
            div.append(cell);
        }
    }
}
