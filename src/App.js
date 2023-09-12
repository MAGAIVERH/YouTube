import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Home from "./components/pages/home/home";
import Shorts from "./components/pages/shorts/shorts";
import Inscricoes from "./components/pages/inscricoes/inscricoes";
import Biblioteca from "./components/pages/biblioteca/biblioteca";
import Historico from "./components/pages/historico/historico";
import SeusVideos from "./components/pages/seusvideos/seusvideos";
import MaisTarde from "./components/pages/assistirmaistarde/maistarde";
import VideosMarcados from "./components/pages/videosmarcados/videosmarcados";
import EmAlta from "./components/pages/emalta/emalta";
import Shopping from "./components/pages/shopping/shopping";
import Musicas from "./components/pages/musica/musica";
import Filmes from "./components/pages/filmes/filmes";
import AoVivo from "./components/pages/aovivo/aovivo";
import Jogos from "./components/pages/jogos/jogos";
import Noticias from "./components/pages/noticias/noticias";
import Esportes from "./components/pages/esportes/esportes";
import Aprender from "./components/pages/aprender/aprender";
import Configuracao from "./components/pages/configuracoes/configuracoes";
import HistoricoDenuncias from "./components/pages/historicodenuncias/historicodenuncias";
import Ajuda from "./components/pages/ajuda/ajuda";
import FeedBack from "./components/pages/feedback/enviarfeedback";
import { UserStorage } from "./context/userContext";
import Login from "./components/pages/login";





function App() {

const [openMenu, setOpenMenu] = useState(true);
 

  return (
    <UserStorage>
      <BrowserRouter>
            <div className="App">
            
              
                <Header openMenu ={openMenu } setOpenMenu={setOpenMenu}/>
                <div style={{ width: '100%' , display: 'flex' }}>
                  
                    <Menu  openMenu= {openMenu}/>
                    <div style={{ width: '100%', 
                                  padding: '70px 70px',
                                  boxSizing: 'border-box', 
                                 
                                }}>
                                
                      <Routes>
                        
                        <Route  path="/"                  element={<Home openMenu= {openMenu} />}/>
                        <Route  path="/home"              element={<Home openMenu= {openMenu} />}/>
                        <Route  path="/shorts"            element={<Shorts                    />}/>
                        <Route  path="/inscription"       element={<Inscricoes                />}/>

                        <Route  path="/biblioteca"        element={<Biblioteca                />}/>
                        <Route  path="/historico"         element={<Historico                 />}/>
                        <Route  path="/seusvideos"        element={<SeusVideos                />}/>
                        <Route  path="/assistirmaistarde" element={<MaisTarde                 />}/>
                        <Route  path="/videosmarcados"    element={<VideosMarcados            />}/>

                        <Route  path="/emalta"            element={<EmAlta                    />}/>
                        <Route  path="/shopping"          element={<Shopping                  />}/>
                        <Route  path="/musica"            element={<Musicas                   />}/>
                        <Route  path="/filmes"            element={<Filmes                    />}/>
                        <Route  path="/aovivo"            element={<AoVivo                    />}/>
                        <Route  path="/jogos"             element={<Jogos                     />}/>
                        <Route  path="/noticias"          element={<Noticias                  />}/>
                        <Route  path="/esportes"          element={<Esportes                  />}/>
                        <Route  path="/aprender"          element={<Aprender                  />}/>

                        <Route  path="/configuracao"      element={<Configuracao              />}/>
                        <Route  path="/historicodenuncias"element={<HistoricoDenuncias        />}/>
                        <Route  path="/ajuda"             element={<Ajuda                     />}/>
                        <Route  path="/feedback"          element={<FeedBack                  />}/>
                        <Route  path="/login"             element={<Login                     />}/>
                        
                      </Routes>
                    </div>
                    
                </div>
              
            </div>
        </BrowserRouter>

    </UserStorage>
    
   
  );
}

export default App;
