
let numeroEncontrado = false
const NUMERO = "9410"
let numeroEvaluar = ""

do {
    let numContrincante = prompt("Ingrese el numero de 4 digitos a evaluar: ")
    let numerosRepetidos = false
    for (let num of numContrincante) {

       let indice = -1;
       let i = 0;
       let numVeces = 0
       
       do {
         indice = numContrincante.indexOf(num, i);
         if (indice !== -1) {
           numVeces += 1;
           i = indice + 1; // Buscar a partir del siguiente índice para encontrar ocurrencias adicionales
         }
       } while (indice !== -1);
       
       if (numVeces > 1) {
        numerosRepetidos = true
       }
    }

    if (numerosRepetidos) {
        window.alert("No se pueden ingresar numeros repetidos")
    } else if (numContrincante.length != 4) {
        window.alert("El número es de 4 digitos")
    } else {
        let picas = 0
        let fijas = 0

        if (numContrincante === NUMERO) {
            numeroEncontrado = true
        } else {
            for (let i = 0; i < 4; i++) {
               let x = NUMERO.search(numContrincante[i])
               if (x === i) {
                fijas += 1
               } else if (x !== -1) {
                picas += 1
               }
            }

            console.log(`El numero: ${numContrincante}`)
            console.log(`Tiene ${picas} picas y ${fijas} fijas.`)
            console.log("-----------------------")
        }
    }

    if (numeroEncontrado) {
        window.alert(`Correcto, el número era: ${numContrincante}!`)
    }
} while (!numeroEncontrado)