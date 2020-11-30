import views from '../views/about.html'
import '../css/componentes.css'
import '../css/style.css'
import '../css/footer.css'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;

}