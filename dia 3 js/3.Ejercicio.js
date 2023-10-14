// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
cont=1

function agregarCampo() {

  const formulario = document.getElementById('miFormulario');
  const padre= document.querySelector('.padre');

  // Crear una nueva etiqueta <label>
  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (cont) + ': ';

  // Crear una nueva caja de texto <input>
  const input = document.createElement('textArea');
  input.type = 'text';
  input.name = 'campo' + (cont);
  input.style.width='50%';


  // Agregar la etiqueta y la caja de texto al formulario
  padre.appendChild(label);
  padre.appendChild(input);
  
  cont+=1

}



// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);
