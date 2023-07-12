let ronda = 0;
let golesArgentina = 0;
let golesFrancia = 0;
let resultadoArgentina = 0
let resultadoFrancia = 0
const ambosJuegan = ()=> resultadoArgentina<=3 || resultadoFrancia<=3;

/*let pateaArgentina = Math.round(Math.random()*1);
if(pateaArgentina == 1)
    console.log ("Golaaaazo de Argentinaaaaaaaaaa");
if(pateaArgentina == 0)
    console.log ("El tiro se va afueraaaaaa, Argentina tiembla");

let pateaFrancia = Math.round(Math.random()*1);
if(pateaFrancia == 1)
    console.log ("Gol de Francia, me quiero morir");
if(pateaFrancia == 0)
    console.log ("El tiro se va afueraaaaaa, Argentina festeja");
resultadoArgentina = resultadoArgentina + pateaArgentina;
resultadoFrancia =  resultadoFrancia + pateaFrancia
console.log("Argentina " + resultadoArgentina + " / Francia " + resultadoFrancia)*/

while(resultadoArgentina<=7 || resultadoFrancia<=7){
    let pateaArgentina = Math.round(Math.random()*1);
    if(pateaArgentina == 1)
        console.log ("Golaaaazo de Argentinaaaaaaaaaa");
    if(pateaArgentina == 0)
        console.log ("El tiro se va afueraaaaaa, Argentina tiembla");
    
    let pateaFrancia = Math.round(Math.random()*1);
    if(pateaFrancia == 1)
        console.log ("Gol de Francia, me quiero morir");
    if(pateaFrancia == 0)
        console.log ("El tiro se va afueraaaaaa, Argentina festeja");
    resultadoArgentina = resultadoArgentina + pateaArgentina;
    resultadoFrancia =  resultadoFrancia + pateaFrancia
    console.log("Argentina " + resultadoArgentina + " / Francia " + resultadoFrancia)
}

