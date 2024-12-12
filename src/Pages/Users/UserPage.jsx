import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserPage({ id }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching user:', error));
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>
            <img src={user.image} alt="avatar" />
            <h2>User: {user.firstName} {user.lastName}</h2>
            <h2>Gender: {user.gender}</h2>
            <h2>{user.email}</h2>
        </div>
    );
}
