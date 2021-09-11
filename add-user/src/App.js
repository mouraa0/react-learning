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

  console.log(users);
  
  return (
    <div>
        <UserForm onAddUser={addUserHandler} />
        <UserList users={users} />
    </div>
  );
}

export default App;
