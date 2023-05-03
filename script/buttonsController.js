const checkPayButton = document.getElementById("payButton");
const totalQuantityButton = document.getElementById("totalQuantity");
const product = document.get

//Habilita el botton de pagar, al haber un producto selecionado
function enablePayButton() {
  if (parseInt(totalQuantityButton.textContent) > 0) {
    checkPayButton.disabled = false;
  }
}
enablePayButton();
//Obteiene el evento y define la direccion del boton
checkPayButton.addEventListener("click", () => {
   if (parseInt(totalQuantityButton.textContent) > 0) {
    if (window.location.pathname == "/proyecto/index.html") {
      window.location.href = "./pages/ticket.html";
    } else {
      window.location.href = "./ticket.html"
    }
  } 

});

//vacia el carrito
const vaciarButton = document.getElementById("vaciar-carrito");
vaciarButton.addEventListener("click", () => {
    cart = [];
    totalQuantity = 0;
    totalPrice = 0;
    createTable(cart);
    createTableQuantityPrice(totalQuantity, totalPrice);
})

//Actualiza el carrito o recupera lo eliminado
const btnReload = document.getElementById("btnReload");
btnReload.addEventListener("click", () => {
    location.reload();
})
