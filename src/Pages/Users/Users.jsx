import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.users) {
                    setUsers(data.users);
                } else {
                    throw new Error('Invalid API response format');
                }
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setError(error.message);
            });
    }, []);

    if (error) return <div>Error: {error}</div>;
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
