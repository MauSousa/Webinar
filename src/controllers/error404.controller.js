import views from '../views/error404.html'
import '../css/componentes.css'


export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;

}