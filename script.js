
//PRIMERO SELECCIONAMOS POR ID EL TEXTAREA 
let pantalla = document.getElementById("pantalla")

// LUEGO SELECCIONAMOS TODOS LOS ELEMENTOS 
var botones = document.querySelectorAll(".boton");


// USAMOS UN FOREACH PARA ITERAR CADA UNO DE LOS ELEMENTOS .boton, TAMBIEN SE PODIA USAR UN FOR IN
// Le agregamos el evento click, y creamos 3 condiciones, primero si es igual, no agregara el objeto, si no que evaluara el resultado
// Si es igual a C, borrara todo 
// Si no es igual a cualquiera de las dos anteriores, ahi si se encargara de colocar el valor del boton presionado en la pantalla
botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        let botInn = boton.innerHTML;
        if(botInn == "="){

            // AQUI CREAMOS UNA EXCEPCION, SI LA OPERACION INGRESADA NO SE PUEDE REALIZAR, DA UN MENSAJE EN LA CALCULADORA Y EN CONSOLA
            try {
                let resultado = eval(pantalla.value)
					//AQUI CON ESTO VERIFICAMOS SI N/0 O 0/0 QUE NO SON EXCEPCIONES, SI NO OTRO TIPO DE DATO
                    if(resultado == Infinity || isNaN(resultado)){
                        opInvalida()
                    }else{
                        pantalla.value = resultado
                    }
            } catch (error) {
                opInvalida()
                console.error(`No se pudo llevar a cabo la operacion expresada, error ${error}`)

            }

        }else if(botInn == "C"){
            pantalla.value = ""
        }
        else{

            // CON ESTAS CONDICIONES VERIFICAMOS QUE NO SE PUEDAN COLOCAR DOS PUNTOS U OPERADORES ARITMETICOS SEGUIDOS
            let ultPant = pantalla.value.slice(-1);
            if(ultPant == "." || ultPant == "+" || ultPant == "-" || ultPant == "*" || ultPant == "/"){
                
                    if(botInn == "." || botInn == "+" || botInn == "-" || botInn == "*" || botInn == "/"){
                        console.error("se estan colocando dos puntos u operadores aritmeticos seguidos")
                    }else{
                        pantalla.value += botInn
                    }
            }else{
                pantalla.value += botInn
            }
        }

    })
})


// CON ESTA FUNCION PODEMOS HACER QUE MUESTRE UN MENSAJE DE OPERACION INVALIDA EN PANTALLA, LUEGO DE 700ms SE COLOCA EL VALOR EN VACIO, PARA SEGUIR OPERANDO
const opInvalida = () =>{
    pantalla.value = "Error, operación invalida"
    setTimeout(()=>pantalla.value = "", 700)
}
