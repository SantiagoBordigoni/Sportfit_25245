// SELECCIONADOR DE PLANES DE GIMNASIO

// CLASES

// A medida que vayamos registrando usuarios por la compra de planes, se les asigna un id interno.
class Socio {
  constructor(ident, plan, precio) {
    this.id= ident;
    this.plan = plan;
    this.precio = precio;
  }
}
// Importamos los planes del json para usarlos en los eventos con las librerias
class Plan {
  constructor(nombre, precio, adheridos, info) {
    this.nombre= nombre;
    this.precio = precio;
    this.cantidadDeSocios = adheridos;
    this.info = info;
  }
}
// FUNCIONES 

function obtenerMembresiasDelJSON () {

  fetch('/tiposDePlanes.json')
      .then( (response) => {
          return response.json();
      })
      .then( (tiposDePlanesJSON) => {

          for(const tipoDePlanJSON of tiposDePlanesJSON) {

              planes.push(new Plan(
                tipoDePlanJSON.nombre,
                tipoDePlanJSON.precio,
                tipoDePlanJSON.adheridos,
                tipoDePlanJSON.info,
              ));
          }
      });
}


// OBTENEMOS INFORMACION DE CADA PLAN 1,2,3
function respuestaClick1(){
  Swal.fire({
    title: 'Información del plan seleccionado',
    text: planes[0].info,
    icon: 'info',
    confirmButtonText: 'Comprar',
    color: 'white',
    iconColor: '#94D104',
    toast: false,
    background: '#140539',
    showDenyButton: true,
    denyButtonText:'Salir',
    confirmButtonColor: '#94D104',

// SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR
  })
  .then((resultado) => {
    if (resultado.isConfirmed){
      Swal.fire({
        title: '¿Cuántas personas desea asociar?',
        text: `Precio unitario: $${planes[0].precio}`,
        icon: 'question',
        input: 'text',
        inputPlaceholder: 'Indique la cantidad de personas a asociar',
        inputValidator: (value) => {
          return new Promise ((resolve) => {
            if (parseInt(value)>=1) {
              resolve()
            } 
            else {
              resolve("ERROR. Introduzca un número:")
            }
          })

        },
        color: 'white',
        iconColor: '#94D104',
        toast: true,
        background: '#140539',
        confirmButtonColor: '#94D104',
        confirmButtonText: 'Agregar al carrito',
        
      })
      .then((response) =>{
        for (let i = 1; i <= parseInt(response.value); i++){
          personasAsociadas.push(new Socio (i + personasAsociadas.length, 1, planes[0].precio));
        }
        
      })
    }
  })
}
function respuestaClick2(){
  Swal.fire({
    title: 'Información del plan seleccionado',
    text: planes[1].info,
    icon: 'info',
    confirmButtonText: 'Comprar',
    color: 'white',
    iconColor: '#94D104',
    toast: false,
    background: '#140539',
    showDenyButton: true,
    denyButtonText:'Salir',
    confirmButtonColor: '#94D104',


// SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR
  })
  .then((resultado) => {
    if (resultado.isConfirmed){
      Swal.fire({
        title: '¿Cuántas personas desea asociar?',
        text: `Precio unitario: $${planes[1].precio}`,
        icon: 'question',
        input: 'text',
        inputPlaceholder: 'Indique la cantidad de personas a asociar',
        inputValidator: (value) => {
          return new Promise ((resolve) => {
            if (parseInt(value)>=1) {
              resolve()
            } 
            else {
              resolve("ERROR. Introduzca un número:")
            }
          })

        },
        color: 'white',
        iconColor: '#94D104',
        toast: true,
        background: '#140539',
        confirmButtonColor: '#94D104',
        confirmButtonText: 'Agregar al carrito',
        
      })
      .then((response) =>{
        for (let i = 1; i <= parseInt(response.value); i++){
          personasAsociadas.push(new Socio (i + personasAsociadas.length, 2, planes[1].precio));
        }
        
      })
    }
  })
}
function respuestaClick3(){
  Swal.fire({
    title: 'Información del plan seleccionado',
    text: planes[2].info,
    icon: 'info',
    confirmButtonText: 'Comprar',
    color: 'white',
    iconColor: '#94D104',
    toast: false,
    background: '#140539',
    showDenyButton: true,
    denyButtonText:'Salir',
    confirmButtonColor: '#94D104',

// SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR

  })
  .then((resultado) => {
    if (resultado.isConfirmed){
      Swal.fire({
        title: '¿Cuántas personas desea asociar?',
        text: `Precio unitario: $${planes[2].precio}`,
        icon: 'question',
        input: 'text',
        inputPlaceholder: 'Indique la cantidad de personas a asociar',
        inputValidator:(value) => {
          return new Promise ((resolve) => {
            if (parseInt(value)>=1) {
              resolve()
            } 
            else {
              resolve("ERROR. Introduzca un número:")
            }
          })

        },
        color: 'white',
        iconColor: '#94D104',
        toast: true,
        background: '#140539',
        confirmButtonColor: '#94D104',
        confirmButtonText: 'Agregar al carrito',
      })
      .then((response) =>{
        for (let i = 1; i <= parseInt(response.value); i++){
          personasAsociadas.push(new Socio (i + personasAsociadas.length, 3, planes[2].precio));
        }
        
      })
    }
  })
}

//CAPTURAMOS EL VALOR DE LA PROMESA


// Se otorga un descuento por cantidad en caso de que se inscriban a 3 personas o mas
function calcularTotal() {
    let total = 0;
    for (const socio of personasAsociadas) {
        total += socio.precio;
    }
    return total;
  }

// INICIO DEL PROGRAMA
let personasAsociadas = [];

let botonPlan1 = document.querySelector("#asociate #planUno button")
let botonPlan2 = document.querySelector("#asociate #planDos button")
let botonPlan3 = document.querySelector("#asociate #planTres button")
let carritoDeCompras = document.getElementsByClassName("carrito")

botonPlan1.addEventListener("click", respuestaClick1)
botonPlan2.addEventListener("click", respuestaClick2)
botonPlan3.addEventListener("click", respuestaClick3)
let planes =  [];
let carrito = [];
obtenerMembresiasDelJSON();

