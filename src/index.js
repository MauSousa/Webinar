import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import {router} from './router/index.routes';


router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})