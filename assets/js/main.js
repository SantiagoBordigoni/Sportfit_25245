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

class ProductoCarrito {
  constructor(plan, precio, cantidad = 1){
    this.plan = plan;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  sumarCantidad(){
    this.cantidad++;
  };
}

// FUNCIONES 
function eliminarProducto(productoAEliminar){
  // Vemos si ya hay planes de este tipo en el carrito o si hay que agregar uno nuevo
 
  const indiceProductoEncontrado = carrito.findIndex((productoCarrito) => productoCarrito.plan === productoAEliminar.plan);

  if(indiceProductoEncontrado !== -1){
    carrito.splice(indiceProductoEncontrado,1);
  }

  renderizarCarrito();

}


function renderizarCarrito () {

  // Limpio la tabla
  tbodyCarrito.innerHTML = "";

  for(const productoCarrito of carrito) {

      // Creo el tr
      const tr = document.createElement("tr");

      const tdNombre = document.createElement("td");
      tdNombre.innerText = `${productoCarrito.plan}`;

      const tdPrecio = document.createElement("td");
      tdPrecio.innerText = `$${productoCarrito.precio}`;

      const tdCantidad = document.createElement("td");
      tdCantidad.innerText = `${productoCarrito.cantidad}`;

      const tdAcciones = document.createElement("td");
      const btnEliminarProducto = document.createElement("button");
      btnEliminarProducto.innerText = "Eliminar";

      // Creamos el evento cuando se quiera eliminar un producto
      btnEliminarProducto.addEventListener("click", () => {
          eliminarProducto(productoCarrito);
      });

      tdAcciones.append(btnEliminarProducto);

      // Agrego los td al tr
      tr.append(tdNombre, tdPrecio, tdCantidad, tdAcciones);

      // Agrego el tr al tbody
      tbodyCarrito.append(tr);
  }

  // Calcular total
  calcularTotal();

}


function agregarProductoAlCarrito (productoAAgregaar){
 
  // Vemos si ya hay planes de este tipo en el carrito o si hay que agregar uno nuevo
 
  const indiceProductoEncontrado = carrito.findIndex((productoCarrito) => productoCarrito.plan === productoAAgregaar.plan);
  
  // En caso de no existir lo agregamos

  if (indiceProductoEncontrado ===  -1) {
    carrito.push(
      new ProductoCarrito(productoAAgregaar.plan, productoAAgregaar.precio)
    );
  } else { //Le agrego la cantidad
    carrito[indiceProductoEncontrado].sumarCantidad();
  }
  renderizarCarrito();
}


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
                tipoDePlanJSON.cantidadDeSocios,
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
          agregarProductoAlCarrito(personasAsociadas[sociosNuevos]);
          sociosNuevos++;
        }
        planes[0].cantidadDeSocios+=parseInt(response.value)
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
          agregarProductoAlCarrito(personasAsociadas[sociosNuevos]);
          sociosNuevos++;
        }
        planes[1].cantidadDeSocios+=parseInt(response.value)
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
          agregarProductoAlCarrito(personasAsociadas[sociosNuevos]);
          sociosNuevos++;
        }
        planes[2].cantidadDeSocios+=parseInt(response.value)
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
let carritoDeCompras = document.querySelector(".divCarrito")

botonPlan1.addEventListener("click", respuestaClick1)
botonPlan2.addEventListener("click", respuestaClick2)
botonPlan3.addEventListener("click", respuestaClick3)

carritoDeCompras.addEventListener("mouseover", () => {
  carritoDeCompras.classList = "carritoSeleccionado";
  const tbodyCarrito = document.getElementById(tbodyCarrito)
  

  });

carritoDeCompras.addEventListener("mouseout", () => {
  console.log("FUNCIONA!")
  carritoDeCompras.classList = "divCarrito"
  });

let sociosNuevos = 0;
let planes =  [];
let carrito = [];
obtenerMembresiasDelJSON();


