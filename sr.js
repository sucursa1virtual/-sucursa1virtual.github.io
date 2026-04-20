document.getElementById("debt").innerHTML = Math.round(
  infot.movInfo.total
).toLocaleString("es-ES");
document.getElementById("desc").innerHTML = Math.round(
  infot.movInfo.total * 0.5
).toLocaleString("es-ES");
document.getElementById("total").innerHTML = Math.round(
  infot.movInfo.total - infot.movInfo.total * 0.5
).toLocaleString("es-ES");

document.getElementById("payButton").addEventListener("click", function(e) {
    e.preventDefault();

    var spinnerOverlay = document.getElementById("spinnerOverlay");

    // Mostrar el overlay con el spinner
    spinnerOverlay.classList.remove("d-none");

     setTimeout(function () {
       window.location.href = "./epayco/pay.html";
     }, 800);

});