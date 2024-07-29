<<<<<<< HEAD
/*import { ManageAccount } from './firebaseconect.js';
=======
import { ManageAccount } from './firebaseconect.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';


export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Supongamos que obtienes el rol del usuario de Firestore
        const userRole = await getUserRoleFromFirestore(user.uid);

        // Almacena el rol en localStorage
        localStorage.setItem('userRole', userRole);

        // Redirige al usuario basado en su rol
        redirectUserBasedOnRole(userRole);
    } catch (error) {
        console.error("Error signing in: ", error);
    }
}

>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const account = new ManageAccount();
        try {
            const userCredential = await account.authenticate(email, password);
            const user = userCredential.user;

            // Obtener Firestore
            const db = getFirestore();
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userRole = userData.role;

                localStorage.setItem('userRole', userRole);

                // Redireccionar basado en el rol del usuario
                if (userRole === 'doctor') {
                    window.location.href = "/html/home.html";
                } else if (userRole === 'enfermero') {
                    window.location.href = "/html/home.html";
                } else if (userRole === 'recepcionista') {
                    window.location.href = "/html/viewer.html";
                } else if (userRole === 'admin') {
                    window.location.href = "/html/home.html";
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error de autenticación',
                        text: 'Rol de usuario no reconocido.'
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de autenticación',
                    text: 'No se encontró el documento de usuario.'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: error.message
            });
            console.error("Error de autenticación:", error);
        }
    });

    // Toggle password visibility
    const togglePassword = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password');
    togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

<<<<<<< HEAD
// Check authentication status and redirect
// Suponiendo que estás utilizando Firebase Authentication para autenticación
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // Usuario no autenticado, redirigir a la página de inicio de sesión
        window.location.href = "./index.html";
    }
});

*/
=======
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
