import React from 'react';
import AddUserButton from './Components/UI/AddUserButton/AddUserButton';
import UsernameInput from './Components/UsernameInput/UsernameInput';
import UserAgeInput from './Components/UserAgeInput/UserAgeInput';

function App() {
  return (
    <div>
      <UsernameInput />
      <UserAgeInput />
    </div>
  );
}

export default App;
