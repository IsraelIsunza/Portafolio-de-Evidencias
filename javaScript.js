document.getElementById("tipForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);

  if (isNaN(subtotal) || isNaN(porcentaje)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const propina = subtotal * (porcentaje / 100);
  const totalConPropina = subtotal + propina;

  document.getElementById("resultado").innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Propina (${porcentaje}%): $${propina.toFixed(2)}</p>
    <p><strong>Total a pagar: $${totalConPropina.toFixed(2)}</strong></p>
  `;
});
