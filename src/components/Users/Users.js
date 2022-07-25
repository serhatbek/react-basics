import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    setIsLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log('users', users);

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Loading...</div>}

      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;
