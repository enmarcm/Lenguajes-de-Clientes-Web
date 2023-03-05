import GaussJordan from "./GJModule.js";

// TOMAMOS TODOS LOS ELEMENTOS NECESARIOS
let NBtn = document.querySelector(".NBtn")
let nInput = document.querySelector(".n")
let gridContainer = document.querySelector('.gridContainer')
let resultadosContainer = document.querySelector(".resultados")

// CREAMOS EL BOTON QUE ENCARGARA DE ENVIAR LOS VALORES AL MODULO GJ
let botonEnviar = document.createElement("div")
botonEnviar.classList.add("btn")
botonEnviar.innerHTML = "Enviar"


let n
let Gauss
let arrayPasar = []



NBtn.addEventListener("click", ()=>{

    if(isNaN(nInput.value)){
        alert('No se ha ingresado un numero')
        nInput.value = 0 
    }else{

        document.querySelectorAll(".valor").forEach(e=>e.remove())
        document.querySelectorAll(".resultado").forEach(e=>e.remove())
        resultadosContainer.style.display = "none"
        

        if(nInput.value == 1){
            alert(("Ingrese un numero a partir de 2"))
            nInput.value = 2
        }

        n = Number(nInput.value)
        

        gridContainer.style.gridTemplateColumns = `repeat(${n+1}, 1fr`
        gridContainer.style.gridTemplateRows = `repeat(${n+1}, 2rem)` //ponemos n+1 para el boton enviar
        

        let inputs = []
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n+1; j++) {
                let input = document.createElement("input")

                if(j == n){
                    input.placeholder = `X${i+1}`
                }else{
                    input.placeholder = `X${i+1}${j+1}`
                }
                
                inputs.push(input)

            }
        }

        inputs.forEach(e => {
            e.classList.add("valor") 
        });

        inputs.forEach(e=>{
            gridContainer.appendChild(e)
        })


        gridContainer.appendChild(botonEnviar)
        
        botonEnviar.style.display = "flex"
        botonEnviar.style.gridColumn = `1/${n+2}`

    }
    //Aqui termina el event click
    })

botonEnviar.addEventListener("click", ()=>{
    
    let resultados = []
    arrayPasar = []
    
    // PONGO EL GAUSS AQUI PARA EVITAR PROBLEMAS
    Gauss = new GaussJordan(n)
    console.log(Gauss)

    document.querySelectorAll(".resultado").forEach(e=>e.remove())
    
    document.querySelectorAll(".valor").forEach(e=>{
        e.value == "" ? arrayPasar.push(0) : arrayPasar.push(Number(e.value))
    })


    console.log(arrayPasar)

    // EMPEZAMOS CON EL GAUSS JORDAN
    Gauss.Llenar(arrayPasar)
    Gauss.GaussJordan()
    console.log(Gauss.array)

    resultados = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n+1; j++) {
            if(j == n){
                isNaN(Gauss.array[i][j]) ? resultados.push("Ecuacion Nula") : resultados.push(Gauss.array[i][j])
            }
        }
    }

    resultadosContainer.style.display = "block"
    resultadosContainer.appendChild(MostrarResultados(resultados))

})


const MostrarResultados = (resultados) =>{
    let divResultados = document.createElement("div")
    
    let i=1
    resultados.forEach(e=>{
        let resultado = document.createElement("h2")
        resultado.classList.add("resultado")
        resultado.innerHTML = `X${i} = ${e}`  
        i++

        divResultados.appendChild(resultado)
    })

    console.log(divResultados)
    return divResultados
}

