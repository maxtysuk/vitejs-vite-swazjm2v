import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams(); // Отримуємо ID з URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Address:</strong> {user.address.city}, {user.address.state}</p>
    </div>
  );
};

export default UserPage;
