
// // CADA UNO DE LOS NUMEROS
// let boton1 = document.getElementById("1")
// boton1.addEventListener("click", ()=>{
//     pantalla.value += boton1.innerHTML
// })

// let boton2 = document.getElementById("2")
// boton2.addEventListener("click", ()=>{
//     pantalla.value += boton2.innerHTML
// })

// let boton3 = document.getElementById("3")
// boton3.addEventListener("click", ()=>{
//     pantalla.value += boton3.innerHTML
// })
// let boton4 = document.getElementById("4")
// boton4.addEventListener("click", ()=>{
//     pantalla.value += boton4.innerHTML
// })
// let boton5 = document.getElementById("5")
// boton5.addEventListener("click", ()=>{
//     pantalla.value += boton5.innerHTML
// })
// let boton6 = document.getElementById("6")
// boton6.addEventListener("click", ()=>{
//     pantalla.value += boton6.innerHTML
// })
// let boton7 = document.getElementById("7")
// boton7.addEventListener("click", ()=>{
//     pantalla.value += boton7.innerHTML
// })
// let boton8 = document.getElementById("8")
// boton8.addEventListener("click", ()=>{
//     pantalla.value += boton8.innerHTML
// })

// let boton9 = document.getElementById("9")
// boton9.addEventListener("click", ()=>{
//     pantalla.value += boton9.innerHTML
// })

// let boton0 = document.getElementById("0")
// boton0.addEventListener("click", ()=>{
//     pantalla.value += boton0.innerHTML
// })

// // BOTONES DE OPERACIONES
// let botonSuma = document.getElementById("+")
// botonSuma.addEventListener("click", ()=>{
//     pantalla.value += botonSuma.innerHTML
// })

// let botonRestar = document.getElementById("-")
// botonRestar.addEventListener("click", ()=>{
//     pantalla.value += botonRestar.innerHTML
// })
// let botonMult = document.getElementById("*")
// botonMult.addEventListener("click", ()=>{
//     pantalla.value += botonMult.innerHTML
// })
// let botonDiv = document.getElementById("/")
// botonDiv.addEventListener("click", ()=>{
//     pantalla.value += botonDiv.innerHTML
// })

// let botonIgual = document.getElementById("=")
// botonIgual.addEventListener("click", ()=>{
//     let resultado = eval(pantalla.value)
//     pantalla.value = resultado
// })

// // LIMPIAR
// let botonLimpiar = document.getElementById("C")
// botonLimpiar.addEventListener("click", ()=>{
//     pantalla.value = ""
// })




// for(boton in i){
    //     if(i[boton].className == "boton"){
        //         console.log(i[boton].innerText)
        //         let click = i[boton]
        
        //         i[boton].addEventListener("click", ()=>{
//             console.log(click.innerText)
//         })

//     }


//PRIMERO SELECCIONAMOS POR ID EL TEXTAREA 
let pantalla = document.getElementById("pantalla")

// LUEGO SELECCIONAMOS TODOS LOS ELEMENTOS 
var botones = document.querySelectorAll(".boton");
botones = Array(botones)
botones = botones[0]

botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{

        if(boton.innerHTML == "="){
            let resultado = eval(pantalla.value)
            pantalla.value = resultado
        }else if(boton.innerHTML == "C"){
            pantalla.value = ""
        }
        else{
            pantalla.value += boton.innerHTML
        }

    })
})
