import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) =>
        props.theme === 'primary'
            ? 'none'
            : '1px solid #d2dae2'}; /* Cor da borda ajustada para combinar com o fundo */
    background: ${(props) =>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' /* Gradiente correspondente ao fundo da página */
            : 'transparent'};
    font-size: 1rem; /* Usando rem para responsividade */
    color: ${(props) =>
        props.theme === 'primary'
            ? '#fff'
            : '#34495e'}; /* Cor do texto ajustada para contrastar com o fundo */
    padding: 12px 24px; /* Ajuste de padding para melhor proporção */
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
        color: ${(props) =>
            props.theme === 'primary'
                ? '#fff'
                : '#34495e'}; /* Cor do texto no hover */
        background: ${(props) =>
            props.theme === 'primary'
                ? 'linear-gradient(180deg, #FF6378 0%, #FE7E5D 100%)' /* Inverte o gradiente no hover para efeito visual */
                : '#f9f9f9'}; /* Cor de fundo no hover */
    }

    &:active {
        opacity: 0.5;
    }
`;
