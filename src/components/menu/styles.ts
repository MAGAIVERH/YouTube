
import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '250px' : '130px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    z-index:3;
   
    
    
   

   
`;
export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '40px' : '70px'};
    min-height: 50px;
    border-radius: 10px;
    cursor: pointer;    
    padding: 8px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};  
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'}; 
   
    margin-bottom:10px;

span {
    font-weight: ${({openMenu}) => openMenu? '600' : '350'}; 
    margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
    font-size: ${({openMenu}) => openMenu? '15px' : '10px'};
    text-align: ${({openMenu}) => openMenu? 'left' : 'center'}; 
   
} 


`;

export const ButtonHome = styled.img`
    width: 25px;
    border-radius:30%;
`;
export const DividerImg = styled.img`
  width: 100vh; /* Ajuste a largura conforme necessário */
  height: 2px;
  object-fit: cover;
  margin: 5px 0; /* Ajuste a margem conforme necessário */
  background-color: white;

  
`;

export const ButtonText = styled.span<{openMenu: boolean}>`
    font-size: ${({openMenu}) => openMenu? '12px' : '0'};
    display: block;
    margin: 20px auto 40px; /* 20px para cima, 0 para os lados, 40px para baixo */
    line-height: 1.5; /* Espaçamento entre linhas */

`;

export const Efeito = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '190px' : '90px'};

 :hover{
   
    background-color:#f2f2f2;
 }

`;












