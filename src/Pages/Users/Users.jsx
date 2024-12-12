import {Link} from 'react-router-dom';

export default function Users(){
    return (
        <div className="Main">
            <h1>USERS</h1>
            <ul>
                <li><Link to='/users/john'>John Doe</Link></li>
                <li><Link to='/users/jane'>Jane Doe</Link></li>
            </ul>
        </div>
    );
}