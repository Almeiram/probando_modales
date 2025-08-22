import axios from "axios";
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalFooter = document.getElementById("modalFooter");


// Abrir modal
document.querySelectorAll(".openModal").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const content = button.getAttribute("data-content");
    const type = button.getAttribute("data-type");

    modalTitle.textContent = title;
    modalBody.innerHTML = content; // permite HTML dinámico
    modalFooter.innerHTML = ""; // limpiamos el footer antes de usarlo

    // Según el tipo de modal, renderizamos botones
    if (type === "confirm") {
      const btnConfirm = document.createElement("button");
      btnConfirm.textContent = "Confirmar";
      btnConfirm.className = "confirm";
      btnConfirm.onclick = () => {
        alert("Registro eliminado ✅");
        modal.style.display = "none";
      };

      const btnCancel = document.createElement("button");
      btnCancel.textContent = "Cancelar";
      btnCancel.className = "cancel";
      btnCancel.onclick = () => modal.style.display = "none";

      modalFooter.appendChild(btnConfirm);
      modalFooter.appendChild(btnCancel);

    } else if (type === "info") {
      const btnOk = document.createElement("button");
      btnOk.textContent = "Entendido";
      btnOk.className = "primary";
      btnOk.onclick = () => modal.style.display = "none";
      modalFooter.appendChild(btnOk);

    } else if (type === "form") {
      const btnSend = document.createElement("button");
      btnSend.textContent = "Enviar";
      btnSend.className = "primary";
      btnSend.onclick = () => {
        const form = document.getElementById("contactForm");
        if (form.checkValidity()) {
          alert("Formulario enviado 📩");
          modal.style.display = "none";
        } else {
          alert("Por favor completa todos los campos.");
        }
      };
      modalFooter.appendChild(btnSend);
    }

    modal.style.display = "flex";
  });
});

// Cerrar con la X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
