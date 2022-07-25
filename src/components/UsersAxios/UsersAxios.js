import axios from 'axios';
import { useEffect, useState } from 'react';

const UsersAxios = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/users');
    const data = res.data;

    console.log('axios', data);
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users Axios</h1>

      {isLoading && <div>Loading...</div>}

      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UsersAxios;
