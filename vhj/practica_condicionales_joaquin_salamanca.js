// condicionales en JS (if, else if, else)
// declaracion de variables

let hambre = false;

//condicion (pregunta)
//siempre y cuando la condicion se cumpla,
// se ejecutara el bloque de codigo dentro de las llaves{}
if (hambre == true) {
    console.log("tengo hambre, voy a comer");
} else { //si la (condicion) no se cumple, 
    //se ejecutara el bloque de codigo dentro de las llaves{}
    console.log("no tengo hambre, voy a dormir");
}

let promedioFinal = 4.0;
if (promedioFinal < 4.0) {
    console.log("Reprobaste la materia");}
    else if (promedioFinal == 4.0 ){
            console.log("Aprobaste, pero raspando") 
        } else if (promedioFinal > 7.0) { 
            console.log("El promedio no es valido en chile")
        } else {
            console.log("Aprobaste la materia")
        }
     

let  dinero = 1499;
let  precioPasaje = 1500;

if (dinero >= precioPasaje) {
    console.log("hay plata, tdos felices, micro :D");
} else {
    console.log("No hay plata, no micro, apata :,v");
}

let tarjeta = true;
let montoTarjeta = 0;
let valorPasaje = 700;

if (tarjeta == true && montoTarjeta >= valorPasaje) {
    console.log("tengo tarjeta, tienes saldo, puedes viajar en micro");
} else if (tarjeta == false && montoTarjeta < valorPasaje){ 
    console.log("tienes tarjeta, pero no saldo suficiente para viajar en micro");
} else if (tarjeta == false && montoTarjeta >= valorPasaje) {
    console.log("no tienes tarjeta, pero tienes saldo suficiente para viajar en micro");}
    else {
        console.log("no tienes tarjeta, y no tienes saldo suficiente");
    }
// condicion para cargar el saldo d la tarjeta
if (montoTarjeta < valorPasaje){
    montoTarjeta = montoTarjeta + 1000;
    console.log("cargaste saldo a la tarjeta, ahora tienes: " + montoTarjeta);
} else {
    console.log("no necesitas cargar saldo a tu tarjeta");
}