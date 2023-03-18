// SE INCLUYE CARRITO DE COMPRAS DE ARTICULOS DE GYM ADEMAS DE LA MEMBRESIA PARA ACCEDER AL GIMNASIO



// ACA TENEMOS EL ARRAY CON LOS DISTINTOS OBJETOS, QUE SERIAN LOS ARTICULOS DE GIMNASIO CON SUS RESPECTIVOS ATRIBUTOS
const equipoGym = [
    {
      nombre: "Pesas de 5 kg",
      precio: 2500,
      stock: 10
    },
    {
      nombre: "Pesas de 10 kg",
      precio: 4000,
      stock: 5
    },
    {
      nombre: "Barra de levantamiento de pesas",
      precio: 7000,
      stock: 2
    },
    {
      nombre: "Mancuernas de 25 kg",
      precio: 15000,
      stock: 3
    },
    {
      nombre: "Rack de entrenamiento",
      precio: 60000,
      stock: 1
    }
  ];

//   EN PRINCIPIO NO TENEMOS ARTICULOS SELECCIONADOS, PERO DEFINIMOS LA LISTA PORQUE AL SELECCIONAR SE VAN A IR CARGANDO AHI
let equipoSeleccionado = [];
//   LA FUNCION AGREGAR AL CARRITO TOMA EL PARAMETRO QUE DA EL USUARIO, LA ENTRADA Y BUSCA ESE ARTICULO. 
function agregarAlCarrito(nombreEquipo) {
    const equipo = equipoGym.find( item => item.nombre.toLowerCase() === nombreEquipo.toLowerCase());
    if (!equipo) {
      console.log("Artículo no encontrado");
      return;
    }
    if (equipo.stock === 0) {
      console.log("Artículo sin stock");
      return;
    }
    equipoSeleccionado.push(equipo);
    equipo.stock -= 1;
    console.log(`Artículo "${equipo.nombre}" agregado al carrito`);
    // EN CASO DE EXISTIR Y HABER STOCK, SE AGREGA A LA LISTA DE EQUIPOS SELECCIONADOS Y SE REDUCE EN UNA UNIDAD EL STOCK DE LA LISTA DE EQUIPO DISPONIBLE
  }
  
function calcularTotal() {
    let total = 0;
    for (const equipo of equipoSeleccionado) {
        total += equipo.precio;
    }
    console.log(`Total: $${total}`);
  }

let articulo =prompt("Ingrese el articulo que desea comprar o 'salir':");
while (articulo!="salir"){
    agregarAlCarrito(articulo)
    articulo= prompt("Ingrese el articulo que desea comprar o 'salir':");}

calcularTotal();
