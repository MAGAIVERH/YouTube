import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  margin-top: 100px;
`;

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  max-width: 300px;
`;


export const Entrar = styled.div`
  font-size: 24px;
  margin-top:15px;
  margin-bottom: 15px;
  text-align:center;
`;

export const Conta = styled.span`
  font-size: 14px;
  color: #777;
  text-align: center;
  line-height: 30px; /* Ajuste o valor para controlar o espaçamento para baixo */
  display: flex;
  align-items: center; /* Centralizar verticalmente */
  justify-content: center; /* Centralizar horizontalmente */
`;




export const Caixa = styled.label`
  display: flex;
  align-items: center;
  margin-top: -130px;
  margin-bottom:70px;
  font-size: 14px;
  color: #777;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;


export const Email = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 95%;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #4285F4;
  }
`;

export const Botao = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4285F4;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin: 0 auto; /* Centralizar horizontalmente */
  display: block; /* Para centralizar verticalmente */
  margin-right:-5px;
  margin-top:70px;
  margin-bottom:25px;

  &:hover {
    background-color: #2E62CB;
  }
`;


// Seu componente Login continua aqui...
