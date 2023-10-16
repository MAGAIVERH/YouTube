import VideoComponent from "../../videoComponent";
import {Container, } from "./styles";
import ShortsPage from "../shortsPage/shortsPage";
import axios from "axios";
import { useState, useEffect } from "react";



interface IProps {
    openMenu: boolean;
  }

function Home({openMenu}: IProps){
 


    const numberOfShortsPages = openMenu ? 4 : 5;

    return (
     
        <Container openMenu={openMenu}>
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent /> 
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent /> 
           
            {Array.from({ length: numberOfShortsPages }).map((_, index) => (
             <ShortsPage key={index} />
            ))}
       
        
        </Container> 
    )
};

export default Home;
