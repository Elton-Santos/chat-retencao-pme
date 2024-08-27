import { StrictMode, useState } from 'react'
import Chat from './salesforce/Chat/index';
import Home from './pages/Home/index';

function App() {
  // console.log("Novo usuário:", newUser);
  const [newUser, setNewUser] = useState(null);

  return (
    <StrictMode>
      <Home />
      <Chat newUser={newUser} />
    </StrictMode>
  )
}

export default App
