// SELECCIONAMOS PRIMERO TODOS LOS TABS Y TODOS LOS CONTENIDOS
// LUEGO SELECCIONAMOS LA LINEA Y EL CONTENEDOR PADRE PARA DARLE UN DISPLAY BLOCK AL DAR CLICK


const tabs = document.querySelectorAll(".tab")
const contenidos = document.querySelectorAll(".content")
const line = document.querySelector('.line')

tabs.forEach((tab, indice)=>{
    tab.addEventListener("click", ()=>{
        // EN PRIMER LUGAR, HACEMOS QUE LA LINEA Y EL CONTENIDO SEAN DISPLAY BLOCK
        line.style.display = "block"
        
        // CON ESTE SWITCH, DEPENDIENDO LA POSICION DEL ELEMENTO QUE SE PULSE, LO COLOCARA EN UNA POSICION U OTRA, ADEMAS EN EL CSS SE LE AGREGA UNA TRANSITION
        
        switch(indice){
            case 0:
                line.style.left = "0%"
                break;
            case 1:
                line.style.left = "33.33%"
                break;
            case 2:
                line.style.left = "66.66%"
                break;     
        }

        contenidos.forEach(contenido=>{
            
            // AQUI PRIMERO QUITAMOS LA CLASE ANIMATE DE LOS CONTENIDOS
            contenido.classList.remove("animate")

            // LUEGO CON UN SETTIMEOUT SE LA COLOCAMOS AL ELEMENTO, SE PONE EN SETIOME OUT, YA QUE SI NO, SOLO FUNCIONA UNA VEZ PORQUE NO TERMINA DE PINTAR EL DOCUMENTO
            setTimeout(() => {
                contenido.classList.add("animate") 
            }, 5);
            

            // AQUI, LUEGO DE QUE PONGA LA CLASE Y EJECUTE LA ANIMACION PROCEDEMOS A MOVER COMO TAL EL ELEMENTO ACTIVO Y LOS INACTIVOS
            setTimeout(() => {
                contenido.style.display = "block"
                contenido.style.left = "-500%" 
                contenidos[indice].style.left = "0%"
            }, 15);
            

            // AQUI SE PUEDE HACER SIN EL TRANSFORM, PERO LA ANIMACION QUEDA RARA
            // contenido.style.display = "block"
            // contenido.style.left = "-500%" 
            // contenidos[indice].style.left = "0%"

        })
    })
})