<<<<<<< HEAD
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
=======
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const db = getFirestore();
const storage = getStorage();

<<<<<<< HEAD
const createExpediente = (expedienteData, pdfUrls) => {
    return addDoc(collection(db, 'expediente'), {
        ...expedienteData,
        pdfUrls // Almacenar las URLs de los PDFs en un array
=======
const createExpediente = (expedienteData, pdfUrl) => {
    return addDoc(collection(db, 'expediente'), {
        ...expedienteData,
        pdfUrl
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const expedienteForm = document.getElementById('expedienteform');

    // Set the current date and time in the hidden field
    

    expedienteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const expedienteData = {
<<<<<<< HEAD
            fechaRegistro: expedienteForm['fechaRegistro'].value,
=======
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
            name: expedienteForm['nombre'].value,
            apellidos: expedienteForm['apellidos'].value,
            edad: expedienteForm['edad'].value,
            fechaNacimiento: expedienteForm['fechaNacimiento'].value,
            genero: expedienteForm['genero'].value,
            direccion: expedienteForm['direccion'].value,
            telefono: expedienteForm['telefono'].value,
            grupoEtnico: expedienteForm['grupoetnico'].value,
<<<<<<< HEAD
=======
            fechaRegistro: expedienteForm['fechaRegistro'].value,
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
            antecedentesHeredoFamiliares: expedienteForm['antecedentesheredofamiliares'].value,
            antecedentesPersonalesPatologicos: expedienteForm['antecedentespersonales'].value,
            padecimientoActual: expedienteForm['padecimientoactual'].value,
            interrogatorioAparatos: expedienteForm['interrogatorioaparatos'].value,
            habitusExterior: expedienteForm['habitus'].value,
            peso: expedienteForm['peso'].value,
            talla: expedienteForm['talla'].value,
            fc: expedienteForm['FC'].value,
            ta: expedienteForm['TA'].value,
            fr: expedienteForm['FR'].value,
            t: expedienteForm['T'].value,
            datosCabeza: expedienteForm['datoscabeza'].value,
            datosCuello: expedienteForm['datoscuello'].value,
            datosTorax: expedienteForm['datostorax'].value,
            datosAbdomen: expedienteForm['datosabdomen'].value,
            datosMiembros: expedienteForm['datosmiembros'].value,
            datosGenitales: expedienteForm['datosgenitales'].value,
            resultadosEstudios: expedienteForm['resultadosestudios'].value,
            diagnosticos: expedienteForm['diagnosticos'].value,
            pronostico: expedienteForm['pronostico'].value,
            indicacionTerapeutica: expedienteForm['indicacionterapeutica'].value,
            evolucion: expedienteForm['evolucion'].value,
            signosVitalesEvolucion: expedienteForm['signosvitalesevolucion'].value,
            resultadosRelevantes: expedienteForm['resultadosrelevantes'].value,
<<<<<<< HEAD
            tratamientoindicaciones: expedienteForm['tratamientoindicaciones'].value,
            criteriosDiagnosticos: expedienteForm['criteriosdiagnosticos'].value,
            planEstudios: expedienteForm['planestudios'].value,
            sugerenciasDiagnosticas: expedienteForm['sugerenciasdiagnosticas'].value,
            fechaHoraAtencion: expedienteForm['fechahoraatencion'].value,
=======
            diagnosticosEvolucion: expedienteForm['diagnosticosevolucion'].value,
            pronosticoEvolucion: expedienteForm['pronosticoevolucion'].value,
            tratamientoIndicaciones: expedienteForm['tratamientoindicaciones'].value,
            criteriosDiagnosticos: expedienteForm['criteriosdiagnosticos'].value,
            planEstudios: expedienteForm['planestudios'].value,
            sugerenciasDiagnosticas: expedienteForm['sugerenciasdiagnosticas'].value,
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
            motivoAtencion: expedienteForm['motivoatencion'].value,
            resumenInterrogatorio: expedienteForm['resumeninterrogatorio'].value,
            resultadosRelevantesUrgencias: expedienteForm['resultadosrelevantesurgencias'].value,
            diagnosticosUrgencias: expedienteForm['diagnosticosurgencias'].value,
<<<<<<< HEAD
            tratamientoPronostico: expedienteForm['tratamientopronostico'].value
        };

        const pdfFiles = expedienteForm['pdfFile'].files;
        const pdfUrls = [];

        if (pdfFiles.length > 0) {
            try {
                for (let i = 0; i < pdfFiles.length; i++) {
                    const pdfFile = pdfFiles[i];
                    const pdfRef = ref(storage, 'pdfs/' + pdfFile.name);
                    const snapshot = await uploadBytes(pdfRef, pdfFile);
                    const pdfUrl = await getDownloadURL(snapshot.ref);
                    pdfUrls.push(pdfUrl);
                }
                await createExpediente(expedienteData, pdfUrls);
=======
            tratamientoPronostico: expedienteForm['tratamientopronostico'].value,
            fechaCreacion: expedienteForm['creationDate'].value // Add creation date
        };

        const pdfFile = expedienteForm['pdfFile'].files[0];

        if (pdfFile) {
            const pdfRef = ref(storage, 'pdfs/' + pdfFile.name);
            try {
                const snapshot = await uploadBytes(pdfRef, pdfFile);
                const pdfUrl = await getDownloadURL(snapshot.ref);
                await createExpediente(expedienteData, pdfUrl);
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
                alert('Expediente guardado con éxito');
                expedienteForm.reset();
            } catch (error) {
                console.error('Error guardando el expediente: ', error);
                alert('Hubo un error guardando el expediente');
            }
        } else {
            try {
<<<<<<< HEAD
                await createExpediente(expedienteData, []);
                alert('Expediente guardado con éxito sin archivos PDF');
=======
                await createExpediente(expedienteData, null);
                alert('Expediente guardado con éxito sin archivo PDF');
>>>>>>> 8f2c3bf9805f1597219825d164c596b3e11a9a71
                expedienteForm.reset();
            } catch (error) {
                console.error('Error guardando el expediente: ', error);
                alert('Hubo un error guardando el expediente');
            }
        }
    });
});
