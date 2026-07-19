// bucles

//Tenemos dos tipos de bucles: for y while

//for (para) lo utilizamos cuando sabemos cuantas veces se va a repetir el bucle.

for (let i = 0; i < 10; i++) {
    console.log("El valor de i es:" + i);
}
//let i= 0; inicializamos la variante i y  decimos que el buclecomienza en 0
//i < 10; condicion que debe cumplirse para que el bucle se siga ejecutando,
// definimos que el bucle se ejecutara mientras i seea meor a 10.
//i++ incrementamos el valor de i en 1 cada vez que se ejecute el bucle,
// es decir, i = i + 1, este 
// que se vaya restando 1 cada vez que se ejecute el bucle.

//while (mientras) lo utilizamos cuando no sabemos


let bateria = 3;

while (bateria > 0) {
    console.log("la bateria esta en: " + bateria);
    bateria--; //decrementamos el valor de bateria en 1 cada vez que se ejecute el bucle,
    // es decir, bateria = bateria - 1, este puede ser bateria++ si queremos que sea creciente,
    // es decir, que se vaya sumando 1 cada vez que se ejecute el bucle.
}
    console.log("Bateria agotada, el bucle ha termiando");

    //Ejercicio: crear un bucle que imprima la suma de los numeros del 1 al 100.
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i; //suma = suma + i
        console.log("la suma de los numeros del 1 al " + i + " es: " + suma);
    }
    console.log("la suma total de los numeros del 1 al 100 es: " + suma);

    //Ejercicio 2: crear un bucle que imprima los numeros pares del 1 al 100.
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) { //si el numero es divisible entre 2, es par 
            console.log("el numero par es " + i);} }

    //ejercicio 3: crear un bucle carga de datos
    descargaDatos = 100;
    while (descargaDatos > 0) {
        console.log("Descargando datos..." + descargaDatos + "%");
        descargaDatos --;
    }

    console.log("Descarga completa.");

    //Ejercicio 4:  Crear un bucle que recorra un array de numeros y sume sus valores. 
    let numeros = [1, 2, 3, 4, 5];
    let sumaNumeros = 0;
    for (let i = 0; i < numeros.length; i++) { //lenght nos da la cantida de elementos que tiene
        //el array(la lista numeros, que tiene5 datos)
        sumaNumeros += numeros[i];
    }


            