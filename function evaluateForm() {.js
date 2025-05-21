function evaluateForm() {
  let score = 0;
  
  // Obtener las respuestas de las preguntas
  const question1 = document.querySelector('input[name="question1"]:checked');
  const question2 = document.querySelector('input[name="question2"]:checked');
  const question3 = document.querySelector('input[name="question3"]:checked');
  
  if (question1) score += parseInt(question1.value);
  if (question2) score += parseInt(question2.value);
  if (question3) score += parseInt(question3.value);
  
  // Mostrar la calificación
  document.getElementById('score').innerText = score;
  
  // Generar gráfico de barras
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
      datasets: [{
        label: 'Puntos obtenidos',
        data: [
          parseInt(document.querySelector('input[name="question1"]:checked')?.value || 0),
          parseInt(document.querySelector('input[name="question2"]:checked')?.value || 0),
          parseInt(document.querySelector('input[name="question3"]:checked')?.value || 0)
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Título del PDF
  doc.text('Resultados del Diagnóstico', 10, 10);
  
  // Calificación
  const score = document.getElementById('score').innerText;
  doc.text(`Calificación: ${score}`, 10, 20);
  
  // Agregar gráfico como imagen
  const canvas = document.getElementById('myChart');
  const imgData = canvas.toDataURL('image/png');
  doc.addImage(imgData, 'PNG', 10, 30, 180, 100);
  
  // Guardar el PDF
  doc.save('diagnostic_results.pdf');
}
