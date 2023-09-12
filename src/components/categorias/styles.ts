import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width:90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin-left:180px;
  z-index:1;
  position: fixed;
`;

export const ButtonContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  padding:3px 3px;
  
  :hover{
    background-color:#E0E0E0;
}
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-color:#f2f2f2;
  color: black;
  border-radius:10px;



 
`;
