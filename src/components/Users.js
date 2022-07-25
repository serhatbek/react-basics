import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log('data', data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log('users', users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
