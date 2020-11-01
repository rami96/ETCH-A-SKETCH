let press = true;
let conte;
creates=(side)=>{
    let res = "";
    for(let a = 0; a < side; a++){
        res+="auto "
    }
    if(press = true){
            //Create Container for smaller divs and assign id to style it
    //const cont = document.getElementsByClassName("cont");
    //var conte = document.getElementsByClassName("conte");
    conte = document.createElement("div");
    conte.className = "conte"
    document.body.appendChild(conte);
    //conte.appendChild(document.createTextNode('top div'));


    //console.log(conte)
    //alert("Yooo");
    //Create 60 divs
    for (let a = 0; a < side; a++){
        let row = document.createElement("div");
        conte.append(row);
        row.id = "row"+a;
        row.style.height = "400/side";
        row.style.display = "grid";
        
        row.style.gridTemplateColumns = res;
        //row.style.border = "1px solid black";

        for(let b=0; b < side; b++){
            let smalldiv = document.createElement("div");
            //smalldiv.id = 'c'+a;
            //smalldiv.className = "small";
            let cls = document.getElementById("row"+a);
            cls.appendChild(smalldiv);
            smalldiv.style.width = "400/side";
            //smalldiv.style.backgroundColor = "red"
            smalldiv.style.border = "1px solid black";

            smalldiv.addEventListener("mouseenter",function(){
                this.style.backgroundColor= "rgb("+Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+")";})
        }

        /*for(let b=0; a < side; b++){
            let smalldiv = document.createElement("div");
            smalldiv.id = 'c'+a;
            smalldiv.className = "small";
            row.appendChild(smalldiv);
            smalldiv.addEventListener("mouseenter",function(){
                this.style.backgroundColor= "rgb("+Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+","+
                Math.floor(Math.random()*255)+")";})
        }*/
    }
    }
}
creates(10)
//}
//cont.innerHTML+='<div class="small"></div>';
//Make clear and restart button
clearit=()=>{
       let sides = prompt("Enter the number of sides:");
       press = false;
       conte.remove();
       creates(sides);
}