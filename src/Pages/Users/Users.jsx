import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject();
            })
            .then((data) => {
                if (data.users) {
                    setUsers(data.users);
                }
            });
    }, []);

    if (users.length === 0) return <div>Loading...</div>;

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
