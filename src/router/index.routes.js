import Home from '../controllers/index.controller';
import Error404 from '../controllers/error404.controller';
// html querys
let content = document.getElementById('root');


export const router = (route) => {
    
    content.innerHTML = "";

    switch(route){
        
        case '':{
            return content.appendChild(Home());
        }        
        case '#/about':
            return console.log('About us')
        case '#/webinar':
            return console.log('Webinar')
        default:
            return content.appendChild(Error404()); 
    }
}