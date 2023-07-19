let golesEquipo1 = 0;
let golesEquipo2 = 0;
let resultadoEquipo1 = 0;
let resultadoEquipo2 = 0;
function nombreEquipo1(){
    equipo1 = prompt("Ingresar el nombre del primer equipo")
    alert("El primer equipo es " + equipo1)
}
function nombreEquipo2(){
    equipo2 = prompt("Ingresar el nombre del segundo equipo")
    alert("El segundo equipo es " + equipo2)
}
nombreEquipo1()
nombreEquipo2()

while(resultadoEquipo1<7 && resultadoEquipo2<7){
    let pateaEquipo1 = Math.round(Math.random()*1);
    if(pateaEquipo1 == 1)
        console.log ("Golaaaazo de " + equipo1 + ". La tribuna explota");
    if(pateaEquipo1 == 0)
        console.log (equipo1 + " con un tiro errado, se va afueraaaaaa!");
    
    let pateaEquipo2 = Math.round(Math.random()*1);
    if(pateaEquipo2 == 1)
        console.log ("Gol de " + equipo2 + " toda la hinchada aplaude");
    if(pateaEquipo2 == 0)
        console.log (equipo2 + " erra el tiro!! Nadie lo puede creer.")
    resultadoEquipo1 = resultadoEquipo1 + pateaEquipo1
    resultadoEquipo2 =  resultadoEquipo2 + pateaEquipo2
    console.log( equipo1 + " " + resultadoEquipo1 + " / " + equipo2 + " " + resultadoEquipo2);
}

