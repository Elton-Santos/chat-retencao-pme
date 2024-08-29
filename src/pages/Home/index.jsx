import React, { useState, useRef } from 'react';
import { Container, Footer, Form, Header, Title, ContainerInputs, Input, InputLabel, ContainerForm } from './styles.js';
import { Button } from '../../components/Button/index.js';

function Home() {
    
    let [newUser, setNewUser] = useState(null);
 
    const inputLogin = useRef();
    const inputEmail = useRef();
    const inputRazaoSocial = useRef();
    const inputNumeroContrato = useRef();
    const inputContato = useRef();
    const inputTelefone = useRef();

    function registerNewUser() {
         
        newUser = {
            login: inputLogin.current.value,
            email: inputEmail.current.value,
            razaoSocial: inputRazaoSocial.current.value,
            numeroContrato: inputNumeroContrato.current.value,
            contato: inputContato.current.value,
            telefone: inputTelefone.current.value,
        }; 
        setNewUser(newUser); 
    }

    return (
        <Container>
            <Header>
                <h1>POC Chat Retenção PME - DEV</h1>
            </Header>
            <ContainerForm>
                <Form>
                    <Title>Cadastro de Usuários</Title>
                    <ContainerInputs>
                        <InputLabel>Login<span> *</span></InputLabel>
                        <Input type='text' placeholder='Login' ref={inputLogin} />

                        <InputLabel>Email<span> *</span></InputLabel>
                        <Input type='email' placeholder='Email' ref={inputEmail} />

                        <InputLabel>Razão Social<span> *</span></InputLabel>
                        <Input type='text' placeholder='Razão Social' ref={inputRazaoSocial} />

                        <InputLabel>Número do Contrato<span> *</span></InputLabel>
                        <Input type='text' placeholder='Número do Contrato' ref={inputNumeroContrato} />

                        <InputLabel>Contato</InputLabel>
                        <Input type='text' placeholder='Contato' ref={inputContato} />

                        <InputLabel>Telefone<span> *</span></InputLabel>
                        <Input type='text' placeholder='Telefone' ref={inputTelefone} />
                    </ContainerInputs>
                    <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Prestador</Button>
                </Form>
            </ContainerForm>
            <Footer>
                <p>Copyright © POC 2023, CoE Amil. Todos os direitos reservados.</p>
            </Footer>
        </Container>
    );
}

export default Home;
