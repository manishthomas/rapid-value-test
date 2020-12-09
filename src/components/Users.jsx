import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/userInfo/${user.id}`} key={user.id}>
          <div className="card">
            <div className="user-image">
              <h1>{user.name.match(/\b\w/g).join('')}</h1>
            </div>
            <div className="user-details">
              <h4>
                <b>{user.name}</b>
              </h4>
              <p>{user.email}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
