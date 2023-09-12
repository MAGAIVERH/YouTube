import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  width:100%;
  height:500px;
  margin-top:40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%; /* Largura do formulário */
  max-width: 300px; /* Largura máxima */
  height:800px;
`;

export const Icon = styled.img`
  width: 80px; /* Tamanho do ícone */
  margin: 20px 0; /* Espaçamento acima do ícone */
  margin-top:50px;
`;



export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s ease-in-out; /* Efeito de transição na borda */
  
  &:focus {
    border-color: #4285F4; /* Cor da borda ao focar */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4285F4; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Efeito de transição no fundo */

  &:hover {
    background-color: #357AE8; /* Cor de fundo ao passar o mouse */
  }
`;

// Seu componente Login continua aqui...



