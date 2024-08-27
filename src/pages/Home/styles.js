import styled from "styled-components";

export const Container = styled.div` 
    background: linear-gradient(180deg, #0a9bda 0%, #6bc5e9 50%, #d3f6ff 100%); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;  
`

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    background: #ffe6e6;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    width: 100%;
    height: 18vh;
    /* padding: 20px; */
    z-index: 1000;
    color: #34495e; 

    /* Ajustes responsivos para o texto */
    h1 {
        font-size: 1.5vw; /* Tamanho relativo à largura da viewport */
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1200px) {
        h1 {
            font-size: 1.2; /* Ajusta o tamanho para telas menores */
        }
    }

    @media (max-width: 768px) {
        height: 20vh; /* Ajusta a altura em telas menores */
        
        h1 {
            font-size: 3vw; /* Ajusta o tamanho do texto para telas ainda menores */
        }
    }

    @media (max-width: 480px) {
        height: 15vh; /* Ajusta a altura em telas muito pequenas */

        h1 {
            font-size: vw; /* Ajusta o tamanho do texto para telas pequenas */
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 600px; /* Ajuste de largura máxima para telas menores */
    width: 100%;
    padding: 0 1rem; /* Adiciona padding para o conteúdo não tocar as bordas */
`

export const Title = styled.h2` 
    color: #34495e;
    text-align: center; 
    font-size: 2vw; /* Ajusta o tamanho da fonte com base na largura da viewport */
    font-style: normal;
    font-weight: 600;
    margin: 0 1rem; /* Margem para evitar que o texto toque as bordas */
    
    @media (min-width: 1440px) { /* Tela grande (34 polegadas) */
        font-size: 2rem; /* Ajusta o tamanho da fonte para telas grandes */
    }

    @media (max-width: 768px) {
        font-size: 1rem; /* Ajusta o tamanho da fonte para tablets e telas menores */
    }

    @media (max-width: 480px) {
        font-size: 0%.5; /* Ajusta o tamanho da fonte para telas pequenas e smartphones */
    }
`

export const ContainerInputs = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ajusta as colunas para maior flexibilidade */
    gap: 10px;
    width: 100%;
    padding: 20px 0 30px 0; /* Adiciona padding para o conteúdo não tocar as bordas */

    @media (min-width: 1440px) { /* Tela grande (34 polegadas) */
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Aumenta o mínimo das colunas em telas grandes */
        gap: 10px; /* Aumenta o espaçamento entre os inputs em telas grandes */
    }

    @media (max-width: 768px) {
        gap: 12px; /* Reduz o espaçamento em telas menores */
    }
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    width: 100%;
    box-sizing: border-box; /* Inclui padding e border na largura total */ 

    /* Ajusta o outline */
    outline: 1px solid #34495e; /* Define a cor e largura do outline */
    outline-offset: 1px; /* Espaço entre o outline e o elemento */
    
    &:focus {
        outline: 1px solid #2ecc71; /* Cor do outline quando o input está focado */
        outline-offset: 1px; /* Espaço entre o outline e o elemento */
    }


    @media (max-width: 768px) {
        padding: 10px 15px; /* Ajusta o padding em telas menores */
    }

    @media (max-width: 480px) {
        padding: 8px 10px; /* Ajusta o padding em telas muito pequenas */
    }
`

export const InputLabel = styled.label`
    color: #34495e;
    font-size: 0.9rem; /* Usando rem para responsividade */
    font-weight: 500;

    span {
        color: #ef4f45;
        font-weight: bold;
    }
`


export const ContainerForm = styled.div`
    position: fixed;
    top: 10%; /* Posição padrão para a maioria das telas */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto; /* Ajusta a altura conforme o conteúdo */
    width: 100%;
    max-width: 800px; /* Aumenta a largura máxima para telas maiores */
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 20px; /* Adiciona um padding para o conteúdo não tocar as bordas */
    z-index: 9999;

    @media (min-width: 1440px) { /* Tela grande (34 polegadas) */
        width: 100%; /* Ajusta a largura em telas grandes */
        top: 13%; /* Ajusta a posição em telas grandes */
    }

    @media (max-width: 768px) {
        width: 100%;
        top: 20%; /* Ajusta a posição em telas pequenas */
    }

    @media (max-width: 480px) {
        width: 100%;
        top: 20%; /* Ajusta a posição em telas muito pequenas */
    }
`



export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    background: #ffe6e6; /* Consistência com o header */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 20px;
    z-index: 1000;
    color: #34495e; /* Consistência com o header */
`





