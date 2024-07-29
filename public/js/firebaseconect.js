<<<<<<< HEAD
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, query, orderByChild, limitToLast, get, onValue, startAt, endAt } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getFirestore, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71

const firebaseConfig = {
    apiKey: "AIzaSyC5FtYUL8Br1yyzjPVob_f5NxH8RGJHQYU",
    authDomain: "expediente-1ed23.firebaseapp.com",
    projectId: "expediente-1ed23",
    storageBucket: "expediente-1ed23.appspot.com",
    messagingSenderId: "281693892079",
    appId: "1:281693892079:web:ce51c550f275e7ff219a1a"
};

// Inicializa la app de Firebase y obtén la instancia de Firestore
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
=======
const db = getFirestore(app);

>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
const auth = getAuth(app);
const db = getFirestore(app);

<<<<<<< HEAD
export { auth, db };

// Obtener paciente por ID
export async function getPacienteById(id) {
    const docRef = doc(db, 'expediente', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log('No se encontró el documento');
        return null;
    }
}

// Actualizar paciente
export async function updatePaciente(id, updatedData) {
    const docRef = doc(db, 'expediente', id);
    await updateDoc(docRef, updatedData);
}
=======
// Función para obtener un paciente por su ID
export async function getPacienteById(id) {
  const docRef = doc(db, 'expediente', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No se encontró el documento');
    return null;
  }
}

// Función para actualizar un paciente en Firestore
export async function updatePaciente(id, updatedData) {
  const docRef = doc(db, 'expediente', id);
  await updateDoc(docRef, updatedData);
}



auth.onAuthStateChanged(function(user) {
  if (!user && window.location.pathname !== '/html/index.html') {
      // Si el usuario no está autenticado y no está en la página de inicio de sesión, redirige
      window.location.href = "/html/index.html";
  }
});
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71

export class ManageAccount {
    // Registrar nuevo usuario
    register(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.error(error.message);
                alert("Error al registrar: " + error.message);
            });
<<<<<<< HEAD
    }

    // Autenticar administrador
    authenticateAdmin(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Swal.fire({
                    title: 'Inicio de sesión exitoso',
                    text: 'Has iniciado sesión correctamente. Serás redirigido a la página principal.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = "/html/admin-dashboard.html";
                });
            })
            .catch((error) => {
                console.error(error.message);
                Swal.fire({
                    title: 'Error al iniciar sesión',
                    text: `Error: ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            });
    }

    // Autenticar personal médico
    async authenticateMedicalStaff(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Swal.fire({
                    title: 'Inicio de sesión exitoso',
                    text: 'Has iniciado sesión correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = "/html/medico-dashboard.html";
                });
            })
            .catch((error) => {
                console.error(error.message);
                Swal.fire({
                    title: 'Error al iniciar sesión',
                    text: `Error: ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            });
    }

    // Cerrar sesión
    signOut() {
        Swal.fire({
            title: '¿Estás seguro de que deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
                    .then(() => {
                        window.location.href = "/";
                    })
                    .catch((error) => {
                        console.error(error.message);
                        Swal.fire({
                            title: 'Error al cerrar sesión',
                            text: `Error: ${error.message}`,
                            icon: 'error',
                            confirmButtonText: 'Aceptar'
                        });
                    });
            }
        });
    }
=======
          });
      }
    });
  }
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
}
