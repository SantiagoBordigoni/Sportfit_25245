// SELECCIONADOR DE PLANES DE GIMNASIO

// A partir de los inputs creamos los objetos para cada Socio
class Socio {
  constructor(ident, plan, precio) {
    this.id= ident;
    this.plan = plan
    this.precio = precio
  }
}

class Plan {
  constructor(nombre,precio, adheridos) {
    this.nombre= nombre;
    this.precio = precio;
    this.cantidadDeSocios = adheridos;
  }
}
// FUNCIONES 
function agregarProductoAlCarrito(planAAgregar){
  
}

function renderizarListaDePlanes() {
  // Limpiar la lista de planes
  divListaDePlanes.innerHTML = "";

  // Recorro la lista de planes
  for(const planDeLista of membresias) {

      // Crear div del plan
      const div = document.createElement("div");
      div.className = "contenedorPlan";

      const article = document.createElement("article");
      article.className = "flex-columna"


      // Creo el título del plan
      const nombre = document.createElement("h4");
      nombre.innerText = planDeLista.nombre;

      // Creo lista que va a contener precio y stock
      const listaTarjeta = document.createElement("ul");
      
      // Creo el precio
      const precio = document.createElement("li");
      precio.innerText = `$${planDeLista.precio}`;

      // Creo la cantidad de socios adheridos a ese plan
      const adheridos = document.createElement("li");
      adheridos.innerText = `Cantidad de socios: ${planDeLista.cantidadDeSocios}`;

      // Creo el botón
      const btnAgregarAlCarrito = document.createElement("button");
      btnAgregarAlCarrito.innerText = "Asociate";
      btnAgregarAlCarrito.className = "boton";

      // Creo el evento para agregar el producto al carrito
      btnAgregarAlCarrito.addEventListener("click", () => {

          // Agregar producto al carrito
          agregarProductoAlCarrito(planDeLista);


      });

      // Agrego al div todos los elementos
      div.append(article);
      article.append(nombre, btnAgregarAlCarrito, listaTarjeta)
      listaTarjeta.append(precio,adheridos)

      // Agrego el div a la lista
      divListaDePlanes.append(div);
    }
  }





function obtenerMembresiasDelJSON(){
  fetch('/membresias.json')
    .then((response) => {
      return response.json();
    })
    .then((membresiasJSON)=>{

      for (const membresiaJSON of membresiasJSON){
        membresias.push(new Plan(
          membresiaJSON.nombre,
          membresiaJSON.precio,
          membresiaJSON.cantidadDeSocios,

        ));
      }
      renderizarListaDePlanes();
    });
}
// OBTENEMOS INFORMACION DE CADA PLAN 1,2,3
// function respuestaClick1(){
//   Swal.fire({
//     title: 'Información del plan seleccionado',
//     text: 'Plan Mensual: cuenta con beneficios como las actividades Indoor/Outdoor, clases online y acceso a pileta.',
//     icon: 'info',
//     confirmButtonText: 'Comprar',
//     color: 'white',
//     iconColor: '#94D104',
//     toast: false,
//     background: '#140539',
//     showDenyButton: true,
//     denyButtonText:'Salir',
//     confirmButtonColor: '#94D104',

// // SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR
//   })
//   .then((resultado) => {
//     if (resultado.isConfirmed){
//       Swal.fire({
//         title: '¿Cuántas personas desea asociar?',
//         text: 'Precio unitario: $10000',
//         icon: 'question',
//         input: 'text',
//         inputPlaceholder: 'Indique la cantidad de personas a asociar',
//         inputValidator: (value) => {
//           return new Promise ((resolve) => {
//             if (parseInt(value)>=1) {
//               resolve()
//             } 
//             else {
//               resolve("ERROR. Introduzca un número:")
//             }
//           })

//         },
//         color: 'white',
//         iconColor: '#94D104',
//         toast: true,
//         background: '#140539',
//         confirmButtonColor: '#94D104',
//         confirmButtonText: 'Agregar al carrito',
        
//       })
//       .then((response) =>{
//         for (let i = 1; i <= parseInt(response.value); i++){
//           personasAsociadas.push(new Socio (i + personasAsociadas.length, 1, 10000));
//         }
        
//       })
//     }
//   })
// }
// function respuestaClick2(){
//   Swal.fire({
//     title: 'Información del plan seleccionado',
//     text: 'Plan Anual: cuenta con beneficios como las actividades Indoor/Outdoor, clases online y acceso a pileta. Acceda por un precio mensual menor al primer plan.',
//     icon: 'info',
//     confirmButtonText: 'Comprar',
//     color: 'white',
//     iconColor: '#94D104',
//     toast: false,
//     background: '#140539',
//     showDenyButton: true,
//     denyButtonText:'Salir',
//     confirmButtonColor: '#94D104',


// // SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR
//   })
//   .then((resultado) => {
//     if (resultado.isConfirmed){
//       Swal.fire({
//         title: '¿Cuántas personas desea asociar?',
//         text: 'Precio unitario: $7500',
//         icon: 'question',
//         input: 'text',
//         inputPlaceholder: 'Indique la cantidad de personas a asociar',
//         inputValidator: (value) => {
//           return new Promise ((resolve) => {
//             if (parseInt(value)>=1) {
//               resolve()
//             } 
//             else {
//               resolve("ERROR. Introduzca un número:")
//             }
//           })

//         },
//         color: 'white',
//         iconColor: '#94D104',
//         toast: true,
//         background: '#140539',
//         confirmButtonColor: '#94D104',
//         confirmButtonText: 'Agregar al carrito',
        
//       })
//       .then((response) =>{
//         for (let i = 1; i <= parseInt(response.value); i++){
//           personasAsociadas.push(new Socio (i + personasAsociadas.length, 2, 7500));
//         }
        
//       })
//     }
//   })
// }
// function respuestaClick3(){
//   Swal.fire({
//     title: 'Información del plan seleccionado',
//     text: 'Plan Anual Plus: cuenta con beneficios como las actividades Indoor/Outdoor, clases online, acceso a pileta y beneficios exclusivos con la tarjeta SportFit.',
//     icon: 'info',
//     confirmButtonText: 'Comprar',
//     color: 'white',
//     iconColor: '#94D104',
//     toast: false,
//     background: '#140539',
//     showDenyButton: true,
//     denyButtonText:'Salir',
//     confirmButtonColor: '#94D104',

// // SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR

//   })
//   .then((resultado) => {
//     if (resultado.isConfirmed){
//       Swal.fire({
//         title: '¿Cuántas personas desea asociar?',
//         text: 'Precio unitario: $9000',
//         icon: 'question',
//         input: 'text',
//         inputPlaceholder: 'Indique la cantidad de personas a asociar',
//         inputValidator:(value) => {
//           return new Promise ((resolve) => {
//             if (parseInt(value)>=1) {
//               resolve()
//             } 
//             else {
//               resolve("ERROR. Introduzca un número:")
//             }
//           })

//         },
//         color: 'white',
//         iconColor: '#94D104',
//         toast: true,
//         background: '#140539',
//         confirmButtonColor: '#94D104',
//         confirmButtonText: 'Agregar al carrito',
//       })
//       .then((response) =>{
//         for (let i = 1; i <= parseInt(response.value); i++){
//           personasAsociadas.push(new Socio (i + personasAsociadas.length, 3, 9000));
//         }
        
//       })
//     }
//   })
// }

// //CAPTURAMOS EL VALOR DE LA PROMESA


// // Se otorga un descuento por cantidad en caso de que se inscriban a 3 personas o mas
// function calcularTotal() {
//     let total = 0;
//     for (const Socio of personasAsociadas) {
//         total += Socio.precio;
//     }
//     return total;
//   }

// // INICIO DEL PROGRAMA
// let personasAsociadas = [];

// let botonPlan1 = document.querySelector("#asociate #planUno button")
// let botonPlan2 = document.querySelector("#asociate #planDos button")
// let botonPlan3 = document.querySelector("#asociate #planTres button")
// let carritoDeCompras = document.getElementsByClassName("carrito")

// botonPlan1.addEventListener("click", respuestaClick1)
// botonPlan2.addEventListener("click", respuestaClick2)
// botonPlan3.addEventListener("click", respuestaClick3)

const divListaDePlanes = document.getElementById("asociate");
let membresias =  [];
let carrito = [];
obtenerMembresiasDelJSON();