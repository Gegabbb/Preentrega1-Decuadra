const btnPay = document.getElementById("ticketBtnPay");
const cardNumber = document.getElementById("card-number");
const cvvNumber = document.getElementById("cvv-number");
const nameLastname = document.getElementById("name-lastName");
const dni = document.getElementById("dni");
const regex = /^[a-zA-Z\s-]+$/; //Usamos expreciones regulares para vericar que se ingresaron letras.

//Capturamos el evento del boton e imprimimos un mensaje
btnPay.addEventListener("click", () =>{
    if (cardNumber.value.length === 16 &&cvvNumber.value.length === 3 &&regex.test(nameLastname.value) && dni.value.length === 8 ) {
        showSucessMessage(["Gracias por elegir Fast and Food. !Regrese pronto!"], "¡El pago ha sido procesado!");
        
    } else {
        showErrorMessage([`Ha ocurrido ocurrido un error.
        Verificar los siguientes campos:
        --> Numero de tarjeta: 16 numeros
        --> Numero de CVV: 3 numeros
        --> Numero de DNI: 8 numero
        `], "¡¡Error al procesar el pago!!")
        
    }
 })
