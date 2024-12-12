import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (!data.id) {
                    throw new Error('User not found');
                }
                setUser(data);
            } catch (err) {
                console.error('Error fetching user:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>
            {user ? (
                <>
                    <img src={user.image} alt="avatar" />
                    <h2>User: {user.firstName} {user.lastName}</h2>
                    <h2>Gender: {user.gender}</h2>
                    <h2>{user.email}</h2>
                </>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
}
