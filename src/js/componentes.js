// imports
import Swal from 'sweetalert2';

// Envia los datos del formulario a firebase
export function submitForm(e) {
    e.preventDefault();
    // Get values
    let nombre = getInputValue("nombre");
    let apellido = getInputValue("apellido");
    let correo = getInputValue("correo");
    

    //Fires the alert
    Swal.fire(
        'Gracias por llenar este demo',
        'En breve llegará te llegará un correo con las indicaciones necesarias para el webinar!',
        'success'
    );
    console.log(nombre);
    console.log(apellido);
    console.log(correo);

}



function getInputValue(id) {
    return document.getElementById(id).value;
}
