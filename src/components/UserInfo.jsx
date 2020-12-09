import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userDetails = await res.json();
      setUser(userDetails);
    };
    fetchUsers();
  }, [id]);
  return (
    <>
      <h2>User Information</h2>
      {user.length === 0 ? (
        'loading...'
      ) : (
        <div className="card user-card">
          <table>
            <tbody>
              <tr>
                <td>Address: </td>
                <td>
                  {user.address?.street},{user.address?.suite},
                  {user.address?.city},{user.address?.zipcode}
                </td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Website: </td>
                <td>{user.website}</td>
              </tr>
              <tr>
                <td>Company Name:</td>
                <td>{user.company?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Link to={'/users'}>
        <button className="back-button">Go Back</button>
      </Link>
    </>
  );
};

export default UserInfo;
