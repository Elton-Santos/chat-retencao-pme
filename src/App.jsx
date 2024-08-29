import { StrictMode, useState } from 'react'
import Chat from './salesforce/Chat/index';
import Home from './pages/Home/index';

function App() {
  const [newUser, setNewUser] = useState([]);
  console.log("Novo usuário:", newUser);
  
  return (
    <StrictMode>
      <Home setNewUser={setNewUser}/>
      <Chat newUser={newUser} />
    </StrictMode>
  )
}

export default App
