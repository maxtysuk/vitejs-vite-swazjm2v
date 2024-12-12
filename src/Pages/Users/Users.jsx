import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="Main">
            <h1>USERS</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
