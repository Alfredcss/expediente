import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5FtYUL8Br1yyzjPVob_f5NxH8RGJHQYU",
  authDomain: "expediente-1ed23.firebaseapp.com",
  projectId: "expediente-1ed23",
  storageBucket: "expediente-1ed23.appspot.com",
  messagingSenderId: "281693892079",
  appId: "1:281693892079:web:ce51c550f275e7ff219a1a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener la lista de pacientes
const getPacientes = async () => {
  try {
    const pacientesCollection = collection(db, 'expediente');
    const pacientesSnapshot = await getDocs(pacientesCollection);
    const pacientesData = pacientesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return pacientesData;
  } catch (error) {
    console.error('Error obteniendo los pacientes:', error);
  }
};

// Función para eliminar un expediente
const deletePaciente = async (id) => {
  try {
    const pacienteDoc = doc(db, 'expediente', id);
    await deleteDoc(pacienteDoc);
    console.log('Paciente eliminado con éxito:', id);
  } catch (error) {
    console.error('Error eliminando el paciente:', error);
  }
};



const mostrarPacientes = (pacientes) => {
  const pacientesListElement = document.getElementById('pacientes-list');
  pacientesListElement.innerHTML = ''; // Limpiar la lista antes de agregar pacientes nuevos

  const rowWrapper = document.createElement('div');
  rowWrapper.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4');

  pacientes.forEach(paciente => {
    const column = document.createElement('div');
    column.classList.add('col', 'mb-4');

    const notification = document.createElement('div');
    notification.classList.add('notification');

    const notiTitle = document.createElement('div');
    notiTitle.classList.add('notititle');
    notiTitle.innerHTML = `${paciente.nombre} ${paciente.apellidos}`;

    const notiBody = document.createElement('div');
    notiBody.classList.add('notibody');
    
    notiBody.innerHTML = `
      <p><strong>Edad:</strong> ${paciente.edad}</p>
      <p><strong>Fecha de nacimiento:</strong> ${paciente.fechaNacimiento}</p>
      <p><strong>Género:</strong> ${paciente.genero}</p>
      <p><strong>Dirección:</strong> ${paciente.direccion}</p>
      <p><strong>Teléfono:</strong> ${paciente.telefono}</p>
      <p><strong>Grupo Étnico:</strong> ${paciente.grupoetnico}</p>
      <p><strong>Fecha de Registro:</strong> ${paciente.fechaRegistro}</p>
      <p><strong>ID:</strong> <span class="badge bg-secondary rounded-pill">${paciente.id}</span></p>
      <button class="btn btn-link btn-sm ver-detalles-btn" type="button" data-paciente-id="${paciente.id}">Ver detalles</button>
    `;

    const notiFooter = document.createElement('div');
    notiFooter.classList.add('notifooter'); // Usando una nueva clase para el pie de tarjeta
    notiFooter.innerHTML = `
     
    `;

    notification.appendChild(notiTitle);
    notification.appendChild(notiBody);
    notification.appendChild(notiFooter);
    column.appendChild(notification);
    rowWrapper.appendChild(column);
  });

  pacientesListElement.appendChild(rowWrapper);

  // Agregar event listener a los botones de eliminar
  document.querySelectorAll('.eliminar-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const pacienteId = event.target.getAttribute('data-paciente-id');
      mostrarAlertaEliminar(pacienteId, pacientes);
    });
  });

  // Agregar event listener a los botones de ver detalles
  document.querySelectorAll('.ver-detalles-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const pacienteId = event.target.getAttribute('data-paciente-id');
      const paciente = pacientes.find(p => p.id === pacienteId);
      mostrarDetallesPaciente(paciente);
    });
  });

  // Agregar event listener a los botones de actualizar
  
};




document.addEventListener('DOMContentLoaded', async () => {
    try {
      const pacientes = await getPacientes();
      console.log('Pacientes obtenidos:', pacientes); // Verifica los datos obtenidos
      mostrarPacientes(pacientes);
  
      const searchInput = document.getElementById('searchInput');
  
      const filtrarPacientes = () => {
        const term = searchInput.value.toLowerCase();
        const filteredPacientes = pacientes.filter(paciente => {
          // Verifica que las propiedades existen antes de usarlas
          const nombre = paciente.nombre ? paciente.nombre.toLowerCase() : '';
          const apellidos = paciente.apellidos ? paciente.apellidos.toLowerCase() : '';
          const genero = paciente.genero ? paciente.genero.toLowerCase() : '';
          const edad = paciente.edad ? paciente.edad.toString().toLowerCase() : ''; // Convertir edad a string
          const id = paciente.id ? paciente.id.toLowerCase() : '';
          
          const nombreCompleto = `${nombre} ${apellidos}`.trim();
          
          return nombre.includes(term) || apellidos.includes(term) || nombreCompleto.includes(term) || genero.includes(term) || edad.includes(term) || id.includes(term);
        });
        mostrarPacientes(filteredPacientes);
      };
  
      searchInput.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
          filtrarPacientes();
        }
      });
  
    } catch (error) {
      console.error('Error obteniendo los pacientes:', error);
    }
  });
  