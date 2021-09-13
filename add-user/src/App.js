import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = newUser => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        newUser
      ];
    });
  };
  
  return (
    <>
        <UserForm onAddUser={addUserHandler} />
        <UserList users={users} />
    </>
  );
}

export default App;
