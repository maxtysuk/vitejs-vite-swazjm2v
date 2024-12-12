import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className="Header">
               <Link to='/'>
                <h1>SPA</h1>
                <h3>Use routing</h3>
                </Link>
        </div>
    );
}

export default Header;