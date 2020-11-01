//To switch between modes (when you enter vs when you press clear)
let press = true;
let conte;
creates=(side)=>{
    //Create grid-template-columns for rows
    let res = "";
    for(let a = 0; a < side; a++){
        res+="auto "
    }
    if(press = true){
    conte = document.createElement("div");
    conte.className = "conte"
    document.body.appendChild(conte);

    //Create rows and assign them to the container "conte"
    for (let a = 0; a < side; a++){
        let row = document.createElement("div");
        conte.append(row);
        row.id = "row"+a;
        row.style.height = "400/side";
        row.style.display = "grid";        
        row.style.gridTemplateColumns = res;
        for(let b=0; b < side; b++){
            //Create columns and assign them to rowa
            let smalldiv = document.createElement("div");
            let cls = document.getElementById("row"+a);
            cls.appendChild(smalldiv);
            //Style columns
            smalldiv.style.width = "400/side";
            smalldiv.style.border = "1px solid black";
            //Change color to random color
            smalldiv.addEventListener("mouseenter",function(){
                this.style.backgroundColor= "rgb("+Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+")";})
        }
    }
    }
}
creates(10)

//Make clear and restart button
clearit=()=>{
       //let sides = prompt("Enter the number of sides: must be 100 or less");
       let sides;
       do{
        sides = prompt("Enter the number of sides:must be 100 or less");
       }
       while(sides > 100);
       press = false;
       conte.remove();
       creates(sides);
}