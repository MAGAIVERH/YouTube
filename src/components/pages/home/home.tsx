import VideoComponent from "../../videoComponent";
import {Container, } from "./styles";
import ShortsPage from "../shortsPage/shortsPage";
import Shorts from "../../../assets/shorts.png";


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
          
        
        </Container> 
    )
};

export default Home;

