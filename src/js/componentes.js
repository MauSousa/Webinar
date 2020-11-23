// imports
import Swal from 'sweetalert2';
import firebase from './db'

// Envia los datos del formulario a firebase
export function submitForm(e) {
    e.preventDefault();
    // Get values
    const nombre = getInputValue("nombre");
    const apellido = getInputValue("apellido");
    const correo = getInputValue("correo");

    

    //Fires the alert
    Swal.fire(
        'Gracias por llenar este demo',
        'En breve llegará te llegará un correo con las indicaciones necesarias para el webinar!',
        'success'
    );

    // let database = firebase.database();
    // let refMessage = database.ref('usuarios');
    let dataForm = {
        name: nombre,
        lastName: apellido,
        email: correo
    };
    // ref.push(dataForm);
    // console.log(database);
    // console.log(refMessage);
    console.log(dataForm);


}

function getInputValue(id) {
    return document.getElementById(id).value;
}
