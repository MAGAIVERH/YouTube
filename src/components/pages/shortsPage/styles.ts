
import styled from "styled-components";



export const Container = styled.div`
   width:100%;
   margin-left:30px;
   margin-top:1px;



   h6{
    width:110%;
    border-bottom-style: inset;
    border-bottom-color: black;
    color: white;
   
   }
  `;


export const ImageBanner = styled.img`
width:80%;
height:400px;
border-radius:12px;
object-fit: cover;
margin-top:50px;



`;

export const TitleContainer = styled.div`
 width:100%;
 display:flex;

`;


export const TextContainer = styled.div`
 display:flex;
 flex-direction:column;


`;

export const Title = styled.span`
font-weight: 600;
color:#0f0f0f;

`;


export const TextCard = styled.span`
color:#8c8c8c;
font-size:14px;


`;
