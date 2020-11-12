import views from '../views/error404.html'
import '../css/error404.css'


export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;

}