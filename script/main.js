let comida; 
let bebida;
let opcion;
let valorComida = 0;
let valorBebida = 0;
let totalCompra = 0;

 function calcularTotal (valor1, valor2) {
    total = valor1 + valor2;
    return total;
 }

do {
    opcion = parseInt (prompt(`
    1. Comida.
    2. Bebida.
    3. Calcular el total.
    4. Ver el total.
    5. Salir.
    `));
    
    switch (opcion) {
        case 1:
            comida = parseInt (prompt(`
            1. Pollo con arroz.
            2. Carne con fideos.
            `));
            if (comida == 1) {
                valorComida = 15;
                alert ("Ha selecionado: " + comida + " $" + valorComida);
            }
            else if (comida == 2) {
                valorComida = 20;
                alert ("Ha selecionado: " + comida + " $" + valorComida);
            }
            break;
        case 2: 
            bebida = parseInt (prompt(`
            1. Cocacola.
            2. Pepsi.
            `));
            if (bebida == 1) {
                valorBebida = 15;
                alert ("Ha selecionado: " + bebida + " $" + valorBebida);
            }
            else if (bebida == 2) {
                valorBebida = 20;
                alert ("Ha selecionado: " + bebida + " $" + valorBebida);
            }
            break;
        case 3:
            if (valorComida == 0 || valorBebida == 0) {
                alert("No se ha ingresado nigun valor aún.");
            } else {
                alert("Se ha calculado el total, selecciona la opción 4") 
                totalCompra = calcularTotal (valorBebida, valorComida);
            }         
            break;
        case 4:
            if (totalCompra == 0) {
                alert("No se ha ingresado nigun valor aún.")
            } else {
                alert("El total es: " + "$"+ totalCompra);
            }
            break;
        case 5:
            alert("Gracias por elegir Fast and Food, regrese pronto");
            break;
        default:
            alert("Seleccione un valor valido");
            break;
    }
    
} while (!(opcion == 5));






