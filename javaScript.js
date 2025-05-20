
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('tipForm');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);

    if (isNaN(subtotal) || isNaN(porcentaje)) {
      resultadoDiv.innerHTML = '<p style="color:red;">Por favor, ingresa valores válidos.</p>';
      return;
    }

    const propina = subtotal * (porcentaje / 100);
    const totalConPropina = subtotal + propina;

    resultadoDiv.innerHTML = `
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
      <p>Propina (${porcentaje}%): $${propina.toFixed(2)}</p>
      <p><strong>Total a pagar: $${totalConPropina.toFixed(2)}</strong></p>
    `;
  });
});
