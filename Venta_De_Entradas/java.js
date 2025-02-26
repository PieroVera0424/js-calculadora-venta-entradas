document.getElementById("calculo").addEventListener("click", function() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");
    
  
    resultado.textContent = '';
    if (edad === '' || isNaN(edad) || edad <= 0) {
        resultado.textContent = 'Por favor, introduce una edad válida mayor que 0.';
        resultado.style.color = 'red';
    } else {
     
        edad = parseInt(edad);
        if (edad < 12) {
            resultado.textContent = 'La entrada es gratuita.';
            resultado.style.color = 'red';
        } else if (edad >= 12 && edad <= 18) {
            resultado.textContent = 'La entrada tiene un precio reducido.';
            resultado.style.color = 'blue';
        } else {
            resultado.textContent = 'El precio completo de la entrada es 20€.';
            resultado.style.color = 'black';
        }
    }
});
