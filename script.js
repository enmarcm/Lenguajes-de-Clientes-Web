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
