import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  seeStatus("Enviando mensaje...");

  const data = {
    nombre: form.name.value.trim(),
    email: form.email.value.trim(),
    motivo: form.topic.value,
    mensaje: form.message.value.trim(),
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "contactos"), data);
    seeStatus("Mensaje enviado correctamente ✅");
    form.reset();
  } catch (error) {
    console.error(error);
    seeStatus("Error al enviar el mensaje ❌");
  }
});

function seeStatus(text) {
  status.textContent = text;
}
  