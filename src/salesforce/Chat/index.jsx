import React from 'react';

function Chat({ newUser }) {
    
  console.log("Chat: ", newUser); 
  
    return (
        <div>
            <h2>Chat Component</h2>
            {newUser ? (
                <div>
                    <p>Login: {newUser.login}</p>
                    <p>Email: {newUser.email}</p>
                    <p>Razão Social: {newUser.razaoSocial}</p>
                    <p>Número do Contrato: {newUser.numeroContrato}</p>
                    <p>Contato: {newUser.contato}</p>
                    <p>Telefone: {newUser.telefone}</p>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
}

export default Chat;
