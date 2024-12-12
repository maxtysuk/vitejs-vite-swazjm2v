import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Завантажуємо дані за допомогою fetch
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Фільтруємо отримані дані
        const filteredUsers = data.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        }));
        setUsers(filteredUsers);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* Формуємо посилання для кожного користувача */}
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
