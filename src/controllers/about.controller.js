import views from '../views/about.html'
import '../css/componentes.css'

export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;

}