import views from '../views/home.html'
import Swal from 'sweetalert2'
import '../css/componentes.css'

export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    // const boton = divElement.querySelector('#btnClick');
    // boton.addEventListener("click", () => {
    //     Swal.fire(
    //         'Gracias',
    //         'En breve llegará te llegará un correo con las indicaciones necesarias para el webinar!',
    //         'success'
    //       )
    // });

    return divElement;
}