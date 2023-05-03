//Este es el codigo que tenia el profe Saul en la clase 11, tuve que modificarlo para que no me imprima muchos mensajes
//en lugar de eso, este remplaza el el contenido del mensaje
function showMessage(
  messages = [],
  type = "success",
  title = "Título no definido"
) {
  let messagesContainer = document.getElementById("messages");
  let messageBody = messagesContainer.querySelector(".alert");
  let titleBody;

  if (!messageBody) {
    // Si no hay un mensaje en el contenedor, lo creamos
    messageBody = document.createElement("div");
    messageBody.setAttribute("role", "alert");
    messageBody.setAttribute("class", `alert alert-${type}`);
    messagesContainer.append(messageBody);

    titleBody = document.createElement("h4");
    titleBody.setAttribute("class", "alert-heading");
    titleBody.innerText = title;
    messageBody.append(titleBody);
  } else {
    // Si ya hay un mensaje en el contenedor, actualizamos su clase para reflejar el nuevo tipo de mensaje
    messageBody.setAttribute("class", `alert alert-${type}`);
  }

  // Actualizamos el titulo del mensaje
  titleBody = messageBody.querySelector(".alert-heading");
  titleBody.innerText = title;

  // Actualizamos el contenido del mensaje con el nuevo mensaje
  let messagesBody = messageBody.querySelector(".messages");
  if (!messagesBody) {
    messagesBody = document.createElement("div");
    messagesBody.setAttribute("class", "messages");
    messageBody.append(messagesBody);
  } else {
    messagesBody.innerHTML = "";
  }
  messages.forEach((msjs) => {
    let messageItem = document.createElement("p");
    messageItem.setAttribute("class", "mb-0");
    messageItem.innerText = msjs;
    messagesBody.append(messageItem);
  });

  messagesContainer.append(messageBody);
}
//
function hideMessage() {
  let messagesContainer = document.getElementById("messages");
  messagesContainer.innerHTML = "";
}

function showSucessMessage(messages = [], title = "Operación exitosa") {
  showMessage(messages, "success", title);
}

function showErrorMessage(
  messages = [],
  title = "La operación no puedo concretarse"
) {
  showMessage(messages, "danger", title);
}
