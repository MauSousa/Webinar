import views from '../views/home.html'
import '../css/componentes.css'
import {submitForm} from '../js/componentes'

export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    const boton = divElement.querySelector('#btnClick');
    boton.addEventListener("click",  submitForm);
        
        // Fires the alert
        // Swal.fire(
        //     'Gracias',
        //     'En breve llegará te llegará un correo con las indicaciones necesarias para el webinar!',
        //     'success'
        // )


    return divElement;
}