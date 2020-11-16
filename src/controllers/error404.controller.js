import views from '../views/error404-2.html'
import '../css/error404-2.css'


export default () => {
    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;

}