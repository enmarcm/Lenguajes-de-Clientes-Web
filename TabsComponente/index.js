class Tab {
  constructor(widthPorcentaje, container, contenido) {
    this.widthPorcentaje = widthPorcentaje;
    this.container = container;
    this.contenido = contenido

    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.style.width = `${widthPorcentaje}%`;


    let tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    
    tabContent.innerHTML = contenido

    let tabLine = document.createElement("div");
    tabLine.classList.add("tab-line");

    tab.append(tabContent);
    tab.append(tabLine);

    container.append(tab);
  }



  static InicializarTabs(){
    const tabs = document.querySelectorAll(".tab");
    const lines = document.querySelectorAll(".tab-line");
    const contenidos = document.querySelectorAll(".contenido")
    var indiceAux = null;
    
    tabs.forEach((tab, indice) => {
        tab.addEventListener("click", () => {


          try{
            console.log(indiceAux);
            if (indice < indiceAux){
              // VA DE DERECHA IZQUIERDA
              lines[indiceAux].style.animation = "cierraDerecha 0.6s both";
              lines[indice].style.animation = "derechaIzquierda 0.6s both";
            }else{
              // AQUI DE IZQUIERDA A DERECHA
              lines[indiceAux].style.animation = "cierraIzquierda 0.6s both";
              lines[indice].style.animation = "izquierdaDerecha 0.6s both";
            }
      
          }catch (e) {
              console.log("Aun no hay active anterior");
          }
          
          lines.forEach((line) => {
            line.classList.remove("line-active");
          });

          lines[indice].classList.add("line-active");
          
          contenidos.forEach(contenido=>{
            contenido.style.display = "none"
          })
          contenidos[indice].style.display = "block"

          indiceAux = indice;

        });
      });

  }


}

const tab1 = new Tab(25, document.querySelector(".tab-container"), "Opcion 1")
const tab2 = new Tab(25, document.querySelector(".tab-container"), "Opcion 2")
const tab3 = new Tab(25, document.querySelector(".tab-container"), "Opcion 3")
const tab4 = new Tab(25, document.querySelector(".tab-container"), "Opcion 4")


// ESTE METODO SIEMPRE SE USA AL FINAL PARA NO TENER QUE METER ESTE CODIGO DENTRO DEL CONSTRUCTOR
Tab.InicializarTabs()



