import React from "react";
import { 
    Container,MenuItem,ButtonHome,DividerImg,ButtonText,Efeito,
  } from "./styles";
  import Home from '../../assets/home-button_icon-icons.com_72700 (1).png';
  import Shorts from '../../assets/shorts.png';
  import Inscription from '../../assets/subscriptions_118589.png';
  import Biblioteca from '../../assets/library-books_118983.png';
  import Historico from '../../assets/historico.png';
  import SeusVideos from '../../assets/seusvideos.png';
  import AssistirMaisTarde from '../../assets/assistirmaistarde.png';
  import VideosMarcados from '../../assets/pelegar.png';
  import EmAlta from '../../assets/emalta.png';
  import Shopping from '../../assets/shopping.png';
  import Musica from '../../assets/musica.png';
  import Filmes from '../../assets/filmes.png';
  import AoVivo from '../../assets/aovivo.png';
  import Jogos from '../../assets/jogos.png';
  import Notícias from '../../assets/noticias.png';
  import Esportes from '../../assets/esportes.png';
  import Aprender from '../../assets/aprender.png';
  import Configuracao from '../../assets/CONFIGURACAO.png';
  import HistoricosDenúncias from '../../assets/hitorico de denuncias.png';
  import Ajuda from '../../assets/ajuda.png';
  import FeedBack from '../../assets/enviar feedback.png';
  import DividerImage from '../../assets/linhadivisoria.png';
  import { useNavigate } from "react-router-dom";


  


  const items = [ 
  { text: 'Inicio',                icon: Home,               path: '/home'},      
  { text: 'Shorts',                icon: Shorts,             path: '/shorts'},    
  { text: 'Inscriçōes',            icon: Inscription,        path: '/inscription' },
  { text: 'Biblioteca',            icon: Biblioteca,         path: '/biblioteca'},      
  { text: 'Histórico',             icon: Historico,          path: '/historico'},    
  { text: 'Seus vídeos',           icon: SeusVideos,         path: '/seusvideos'},
  { text: 'Assistir mais tarde',   icon: AssistirMaisTarde,  path: '/assistirmaistarde'}, 
  { text: 'Vídeos Marcados',       icon: VideosMarcados,     path: '/videosmarcados'},     
  { text: 'Em alta',               icon: EmAlta,             path: '/emalta'},    
  { text: 'Shopping',              icon: Shopping,           path: '/shopping'},
  { text: 'Musica',                icon: Musica,             path: '/musica'},      
  { text: 'Filmes',                icon: Filmes,             path: '/filmes'},    
  { text: 'Ao vivo',               icon: AoVivo,             path: '/aovivo'},
  { text: 'Jogos',                 icon: Jogos,              path: '/jogos'},      
  { text: 'Notícias',              icon: Notícias,           path: '/noticias'},    
  { text: 'Esportes',              icon: Esportes,           path: '/esportes'},
  { text: 'Aprender',              icon: Aprender,           path: '/aprender'},      
  { text: 'Configuração',          icon: Configuracao,       path: '/configuracao'},    
  { text: 'Historico de denúncias',icon: HistoricosDenúncias,path: '/historicodenuncias'},
  { text: 'Ajuda',                 icon: Ajuda,              path: '/ajuda'},      
  { text: 'Enviar feedback',       icon: FeedBack ,          path: '/feedback'},]



  interface IProps {
    openMenu: boolean;
  }

function Menu({openMenu }: IProps){
  const navigate = useNavigate();


  

    return (
     
  <Container openMenu={openMenu}>
      
  {items.map((item, index) => (
      <React.Fragment key={index}>
          <Efeito openMenu={openMenu}>
            <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(item.path)}>
              <ButtonHome alt="" src={item.icon} />
                  <span>{item.text}</span> 
            </MenuItem> 
          </Efeito>

            {index === 2 || index === 7 || index === 16 || index === 20 ? (
      
              <div style={{ textAlign: 'center'}}>
                <DividerImg src={DividerImage} alt="Divider" className="no-hover-DividerImg"/>
              </div>
              ) : null} 

            
          </React.Fragment>     
  ))}  
        <ButtonText openMenu={openMenu}>
          <span>Sobre Imprensa</span><br />
          <span>Direitos autorais</span><br />
          <span>Entre em contato</span><br />
          <span>Criadores de conteúdo</span><br />
          <span>Publicidade</span><br />
          <span>Desenvolvedores</span><br />
          <span>Termos</span><br />
          <span>Privacidade</span><br />
          <span>Política e segurança</span><br />
          <span>Como funciona o YouTube</span><br />
          <span>Testar os novos recursos</span><br />
          <span>© 2023 Google LLC</span>
        </ButtonText>
  </Container>
       
    )
};

export default Menu;