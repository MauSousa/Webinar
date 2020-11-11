import Home from '../controllers/index.controller';
import About from '../controllers/about.controller';
import Error404 from '../controllers/error404.controller';
// html querys
let content = document.getElementById('root');


export const router = (route) => {
    
    content.innerHTML = "";

    switch(route){
        
        case '':{
            return content.appendChild(Home());
        }        
        case '#/about': {
            return content.appendChild(About());
        }
        default:{
            return content.appendChild(Error404()); 
        }
    }
}
