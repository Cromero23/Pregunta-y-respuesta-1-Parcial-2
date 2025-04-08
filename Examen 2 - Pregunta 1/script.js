document.getElementById('agregarBtn').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const password = document.getElementById('password').value;
    const acepta = document.getElementById('acepta').checked;
  
    const telRegex = /^\d{3} \d{2} \d{2} \d{2}$/;
  
    if (!nombre || !apellidos || !telRegex.test(telefono) || password.length < 8 || !acepta) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }
  
    document.getElementById('libros').classList.remove('hidden');
  });
  
  document.getElementById('libro').addEventListener('change', function () {
    const selected = this.options[this.selectedIndex];
    const precio = selected.getAttribute('data-precio');
    document.getElementById('precio').value = precio;
  });
  
  document.getElementById('calcularBtn').addEventListener('click', function () {
    const precio = parseFloat(document.getElementById('precio').value);
    const iva = parseFloat(document.getElementById('iva').value);
  
    if (isNaN(precio)) {
      alert('Introduce un precio válido.');
      return;
    }
  
    const total = precio * (1 + iva);
    const formatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    });
  
    document.getElementById('resultado').value = formatter.format(total);
  });
  