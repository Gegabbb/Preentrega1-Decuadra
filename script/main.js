//objetos
//este objeto tiene el menu de comidas, bebidas, y postres, con sus respectivos precios
let menu = {
  comidas: [
    { nombre: "Guiso", precio: 2302.54 },
    { nombre: "Asado", precio: 6150.15 },
    { nombre: "Ensalada", precio: 1200 },
    { nombre: "Sopa", precio: 2030.12 },
  ],
  bebidas: [
    { nombre: "Agua", precio: 0 },
    { nombre: "CocaCola", precio: 350.25 },
    { nombre: "Sprite", precio: 350 },
    { nombre: "Seven up", precio: 350.1 },
    { nombre: "Manaos", precio: 290.73 },
    { nombre: "Bagio", precio: 412.5 },
  ],
  postres: [
    {nombre: "Helado", precio: 1231.12 },
    {nombre: "Flan", precio: 935.42 },
    {nombre: "Gelatina", precio: 602.23},
    {nombre: "Ensalada de fruta", precio: 1230.32},
    {nombre: "Arroz con leche", precio:702.65 },
    {nombre: "Torta", precio: 1523.65}
  ]
};

//funciones

//Calcula la suma de los valores totales de cada seccion(Comidas, bebidas, postre)
function calcularTotal(valor1, valor2, valor3) {
  let total = valor1 + valor2 + valor3;
  return total;
}
//Imprime en la consola el menu de comida, bebida y sus precios, creada con objetos
function imprimirMenuObjetos(productos) {
  for (const [indice, producto] of productos.entries()) {
    console.log(
      indice + " --> " + producto.nombre + " " + "$" + producto.precio
    );
  }
}
//obtiene la opcion del menu, y verifica que sea valido
function obtenerOpcionMenu(mensaje) {
  let opcion = " ";
  while (opcion === " " ||opcion === null) {
    opcion = prompt(mensaje);
  }
  return opcion;
}
//utiliza la funcion de orden superior para calcular el total de los precios guardados en un array
function acumuladorDePrecios(consumo) {
  return consumo.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
//arreglos
const DESCUENTOS = [0, 5, 7, 10, 12, 15, 20];

//variables y arreglos
let opcion;
//variables y arreglos case 1
let opcionComida;
let consumoComida = [];
let valorComida = 0;
//variables y arreglos  case 2
let opcionBebida;
let consumoBebida = [];
let valorBebida = 0;
//variables y arreglos  case 3:
let opcionPostre;
let consumoPostre = [];
let valorPostre = 0;
//varibales case 4  y 5
let totalCompra = 0;
// contador para los case 1, 2, 3
let i = 0;

//bucle
do {
  opcion = parseInt(
    prompt(`
    1. Comida.
    2. Bebida.
    3. Postre
    4. Calcular el total.
    5. Ver el total.
    6. Salir.
    `)
  );

  switch (opcion) {
    //inicio del case 1: en este case se obtiene el pedido de comidas, y se calcula el precio total de todas las comidas pedidas.
    case 1:
      console.log(
        "------------------------------------------------------------\n"
      );
      imprimirMenuObjetos(menu.comidas);
      do {
        opcionComida = obtenerOpcionMenu(
          "¿Que desea consumir (Active la consola, por favor)? Para cancelar precionar n"
        );
        if (
          opcionComida >= 0 &&
          opcionComida < menu.comidas.length &&
          menu.comidas[opcionComida]
        ) {
          console.log(
            "------------------------------------------------------------\n"
          );
          consumoComida[i++] = menu.comidas[opcionComida].precio;
          valorComida = acumuladorDePrecios(consumoComida);
          console.log("El total en comida sera de: $" + valorComida);
        }
        console.log(
          "------------------------------------------------------------\n"
        );
      } while (opcionComida != "n");
      break;
    //inicio del case 2: en este case se obtiene el pedido de las bebidas, y se calcula el precio total de las bebidas pedidas.
    case 2:
      imprimirMenuObjetos(menu.bebidas);
      do {
        opcionBebida = obtenerOpcionMenu(
          "¿Que desea consumir? Para cancelar precione n"
        );
        if (
          opcionBebida >= 0 &&
          opcionBebida < menu.bebidas.length &&
          menu.bebidas[opcionBebida]
        ) {
          console.log(
            "------------------------------------------------------------\n"
          );
          consumoBebida[i++] = menu.bebidas[opcionBebida].precio;
          valorBebida = acumuladorDePrecios(consumoBebida);
          console.log("El valor total en bebidas sera de: $" + valorBebida);
        }
        console.log(
          "------------------------------------------------------------\n"
        );
      } while (opcionBebida != "n");
      break;
    //inicio del case 3: en este case se obtiene el pedido de postre, y se calcula el precio total de laos postres pedidos.
    case 3:
      imprimirMenuObjetos(menu.postres);
      do {
        opcionPostre = obtenerOpcionMenu(
          "¿Que desea consumir? Para cancelar precione n"
        );
        if (
          opcionPostre >= 0 &&
          opcionPostre < menu.postres.length &&
          menu.postres[opcionPostre]
        ) {
          console.log(
            "------------------------------------------------------------\n"
          );
          consumoPostre[i++] = menu.postres[opcionPostre].precio;
          valorPostre = acumuladorDePrecios(consumoPostre);
          console.log("El valor total en postres seran de: $" + valorPostre);
        }
        console.log(
          "------------------------------------------------------------\n"
        );
      } while (opcionPostre != "n");
      break;
    //inicio case 4: en este case se solicita que seleccione un descuento si corresponde, y se calcula el total de la cuenta.
    case 4:
      if (valorComida === 0 || valorBebida < 0 || valorPostre === 0) {
        alert("No se ha ingresado nigun valor aún.");
      } else {
        totalCompra = calcularTotal(valorBebida, valorComida, valorPostre);
        for (const [indice, descuento] of DESCUENTOS.entries()) {
          console.log(indice + " --> " + descuento + "%");
        }
        console.log(
          "------------------------------------------------------------\n"
        );
        let descuento = prompt("¿Cuál es el descuento que se le va a aplicar?");
        console.log("Ha selecionado: --> " + descuento);
        let totalDescuento = (totalCompra * DESCUENTOS[descuento]) / 100;
        console.log("El total es de: " + totalCompra);
        console.log("El descuento será de: $" + totalDescuento);
        totalCompra = totalCompra - totalDescuento;
        alert("Se ha calculado el total, selecciona la opción 5");
      }
      console.log(
        "------------------------------------------------------------\n"
      );
      break;
    //inicio del case 5: aqui se muestra el total de la cuenta, redondeando hacia arriba.
    case 5:
      if (totalCompra === 0) {
        alert("No se ha ingresado nigun valor aún.");
      } else {
        alert("El total es: " + "$" + Math.ceil(totalCompra));
      }
      break;
    case 6:
      alert("Gracias por elegir Fast and Food, regrese pronto.");
      break;
    default:
      alert("Seleccione un valor valido");
      break;
  }
} while (opcion != 6);
