import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top:0;
    z-index:2;
    overflow-x: hidden;
    overflow-y: hidden;
    
   
    
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 20px;
    height: 40px;
    padding-left:10px;
    padding-right:10px;
    margin-left: 5px;
    margin-right: 35px;
    margin-top: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    position: relative; /* Adiciona posicionamento relativo para elementos filhos posicionados relativamente a este */
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: transparent; /* Define a cor de fundo inicial */
        transition: background-color 0.3s ease-in-out;
        z-index: -1; /* Coloca o círculo atrás do ícone */
    }

    &:hover::before {
        background-color: #E0E0E0; /* Define a cor de fundo no hover */
    }
`;


export const ButtonIcon = styled.img`
    width: 25px;
    border-radius:30%;
`;

export const SearchContainer = styled.div`
    display: flex;
    margin-left:200px;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-right: -5px;
    margin-top: 5px;


`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left:1px;
    margin-right: 500px;
    margin-top: 5px;
`;

export const ButtonMicro = styled.div`
    width: 30px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out, border-width 0.3s ease-in-out;

    :hover {
        background-color: #E0E0E0;
        border: 5px solid #E0E0E0;
        border-radius: 50%;
    }
`;

export const ButtonM = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30%;
    margin-top: 9px;
    margin-left: -970px;
    object-fit: cover;
    border-radius: 50%;
`;


export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    margin-top:-10px;
    margin-left:-100px;
    column-gap:15px;

`;

export const ButtonSino = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 50%;

    :hover{
        background-color: #E0E0E0;
        border: 5px solid #E0E0E0;
        border-radius: 50%;
       
    }
`;

export const ButtonS = styled.img`
    width: 30px;
    height:30px;
    border-radius:30%;
    margin-left:-410px;
    margin-top:30px;
`;


export const ButtonVideo = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background-color: #E0E0E0;
    border: 5px solid #E0E0E0; /* Adicione a borda aqui */
    border-radius: 50%;
  }
`;

export const ButtonV = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30%;
  margin-left: -350px;
  margin-top: 30px;
`;



export const ButtonUsuario = styled.span`
  position: relative;
  width: 30px; /* Largura e altura iguais para um círculo */
  height: 30px; /* Largura e altura iguais para um círculo */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  margin-left: -155px;
  margin-top: 15px;
  background-color: transparent; /* Adicione um fundo transparente para evitar bordas estranhas */

  /* Estilos para as iniciais */
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%; /* Largura e altura iguais para um círculo */
    display: flex;
    justify-content: center;
    align-items: center; /* Centralizar verticalmente as letras */
  }

  :hover {
    background-color: #E0E0E0;
    border: 5px solid #E0E0E0;
    border-radius: 50%;
  }

`;




