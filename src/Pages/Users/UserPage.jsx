import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.id) {
                    setUser(data);
                } else {
                    throw new Error('Invalid API response format');
                }
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
                setError(error.message);
            });
    }, [id]);

    if (error) return <div>Error: {error}</div>;
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
