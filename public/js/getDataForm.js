import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const db = getFirestore();
const storage = getStorage();

const createExpediente = (expedienteData, pdfUrl) => {
    return addDoc(collection(db, 'expediente'), {
        ...expedienteData,
        pdfUrl
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const expedienteForm = document.getElementById('expedienteform');

    // Set the current date and time in the hidden field
    

    expedienteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const expedienteData = {
            name: expedienteForm['nombre'].value,
            apellidos: expedienteForm['apellidos'].value,
            edad: expedienteForm['edad'].value,
            fechaNacimiento: expedienteForm['fechaNacimiento'].value,
            genero: expedienteForm['genero'].value,
            direccion: expedienteForm['direccion'].value,
            telefono: expedienteForm['telefono'].value,
            grupoEtnico: expedienteForm['grupoetnico'].value,
            fechaRegistro: expedienteForm['fechaRegistro'].value,
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
            diagnosticosEvolucion: expedienteForm['diagnosticosevolucion'].value,
            pronosticoEvolucion: expedienteForm['pronosticoevolucion'].value,
            tratamientoIndicaciones: expedienteForm['tratamientoindicaciones'].value,
            criteriosDiagnosticos: expedienteForm['criteriosdiagnosticos'].value,
            planEstudios: expedienteForm['planestudios'].value,
            sugerenciasDiagnosticas: expedienteForm['sugerenciasdiagnosticas'].value,
            motivoAtencion: expedienteForm['motivoatencion'].value,
            resumenInterrogatorio: expedienteForm['resumeninterrogatorio'].value,
            resultadosRelevantesUrgencias: expedienteForm['resultadosrelevantesurgencias'].value,
            diagnosticosUrgencias: expedienteForm['diagnosticosurgencias'].value,
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
                alert('Expediente guardado con éxito');
                expedienteForm.reset();
            } catch (error) {
                console.error('Error guardando el expediente: ', error);
                alert('Hubo un error guardando el expediente');
            }
        } else {
            try {
                await createExpediente(expedienteData, null);
                alert('Expediente guardado con éxito sin archivo PDF');
                expedienteForm.reset();
            } catch (error) {
                console.error('Error guardando el expediente: ', error);
                alert('Hubo un error guardando el expediente');
            }
        }
    });
});
