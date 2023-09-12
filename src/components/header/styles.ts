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
    
   
    
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 20px;
    height:40px;
    margin-left: 10px;
    margin-right:25px;
    margin-top:-2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 50%;
   

:hover{
        background-color: #E0E0E0;
       
    }
`;

export const ButtonIcon = styled.img`
    width: 30px;
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
    width: 20px;
    height:40px;
    margin-top:-2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 50%;
   

:hover{
        background-color: #f2f2f2;
       
    }
      

`;

export const ButtonM = styled.img`
    width: 30px;
    border-radius:30%;
    margin-top:9px;
    margin-left:-970px;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    margin-top:5px;
    column-gap:15px;

`;

export const ButtonSino = styled.div`
    width: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 50%;

    :hover{
        background-color: #f2f2f2;
       
    }
`;

export const ButtonS = styled.img`
     width: 30px;
     height:35px;
    border-radius:30%;
    margin-left:-410px;
    margin-top:30px;
`;

export const ButtonVideo = styled.div`
    width: 20px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 50%;

    :hover{
        background-color: #f2f2f2;
       
    }

`;

export const ButtonV = styled.img`
    width: 40px;
     height:30px;
    border-radius:30%;
    margin-left:-350px;
    margin-top:30px;
`;

export const ButtonUsuario = styled.span`
    width: 40px;
    height:40px;
    display: flex;
    justify-content: center;
    text-align:center;
    cursor:pointer;
    border-radius: 50%;
    margin-left:-155px;
    margin-top:25px;


    :hover{
        background-color: #f2f2f2;
        width: 60px;
        height:30px;
        border-radius:50%;
        padding-top:5px;
       
    }
`;



