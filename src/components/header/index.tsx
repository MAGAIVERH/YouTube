import { 
    Container, 
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    ButtonMicro,
    ButtonM,
    HeaderButton,
    ButtonSino,
    ButtonS,
    ButtonVideo,
    ButtonV,
    ButtonUsuario,
    } from "./styles";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import Lupa from '../../assets/search.png';
import Microfone from '../../assets/microfone.png';
import Sino from '../../assets/sino.png';
import Video from '../../assets/video.png';

import NavigationBar from '../categorias/categoria';
import { useNavigate } from "react-router-dom";



interface IProps {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void    
}

function Header({openMenu, setOpenMenu}: IProps){
    const navigate = useNavigate();


 
    return (
     <>  
        <Container>
                <LogoContainer>
                    <ButtonContainer onClick={() => setOpenMenu(!openMenu)}>
                        <ButtonIcon alt="" src={HamburgerIcon}/>
                    </ButtonContainer>
                    <img 
                        style={{cursor: 'pointer', width: '100px'}}
                        alt=""
                        src={Logo}
                    />
                    
                </LogoContainer>
                    
                    
                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder= "Pesquisar"/>
                    </SearchInputContainer>

                    <SearchButton>
                        <ButtonIcon alt="" src={Lupa} />
                    </SearchButton>

                    <ButtonMicro>
                        <ButtonM alt="" src={Microfone}/>
                    </ButtonMicro>
                </SearchContainer>



                <HeaderButton>
                    <ButtonSino>
                        <ButtonS alt="" src={Sino}/>
                    </ButtonSino>

                    <ButtonVideo>
                        <ButtonV alt="" src={Video}/>
                    </ButtonVideo>

                    <ButtonUsuario onClick={() => navigate('/login')}>
                       <span>CM</span> 
                    </ButtonUsuario>

                
                   
                </HeaderButton>
            
        </Container>
        <NavigationBar />
    </>     
    )

};

export default Header;