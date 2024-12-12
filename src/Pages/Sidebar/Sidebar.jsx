import './Sidebar.css';
import {NavLink} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                   
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;