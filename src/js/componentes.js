// imports
import Swal from 'sweetalert2';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAZnZVxU996ZExmhpv99nr9L_MuMND6bhM",
    authDomain: "webinar-115f7.firebaseapp.com",
    databaseURL: "https://webinar-115f7.firebaseio.com",
    projectId: "webinar-115f7",
    storageBucket: "webinar-115f7.appspot.com",
    messagingSenderId: "725929204417",
    appId: "1:725929204417:web:a354d34398622446c39240",
    measurementId: "G-1GWGSKWETX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Hace referencia a los mensajes que van a la collecion de firebase
//let messageRef = firebase.database().ref('messages');


// Envia los datos del formulario a firebase
export function submitForm(e) {
    e.preventDefault();
    // Get values
    const nombre = getInputValue("nombre");
    const apellido = getInputValue("apellido");
    const correo = getInputValue("correo");
    
    // saveMessage(nombre, apellido, correo);
    
    //Fires the alert
    Swal.fire(
        'Gracias',
        'En breve llegará te llegará un correo con las indicaciones necesarias para el webinar!',
        'success'
    );

    console.log(nombre);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}


// Funcion para enviar los datos a firebase
// function saveMessage(nombre, apellido, correo){
//     let newMessageRef = messageRef.push();
//     newMessageRef.set({
//         nombre = nombre,
//         apellido = apellido,
//         correo = correo
//     });
// }