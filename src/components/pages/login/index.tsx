import { useState,useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Container,Entrar ,Conta,Email ,Botao,Caixa } from "./styles";
import LogoGoogle from "../../../assets/Google-Logo-No-Background.png";



function Login(){
  const { handleLogin } = useContext(UserContext);


    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');


    return (
        <>
        <Container>
          <form >
            <img src={LogoGoogle} alt="Ícone do Google" className="icon" 
              style={{
              width: "100px", // Tamanho da imagem
              margin: "0 auto", // Centralizar horizontalmente
              display: "block" // Para centralizar verticalmente, se necessário,
            }} />
            <Entrar className="login">Fazer Login</Entrar>
            <Conta className="conta">Use sua Conta do Google</Conta>
            <Email placeholder="Digite seu Email" className="email" type="email" value={email} onChange= {(e) => setEmail(e.target.value)}  />
            <Email placeholder="Digite sua Senha" className="senha" type="password" value={password} onChange= {(e) => setPassword(e.target.value)}  />
            <Botao className="botao" onClick={() => handleLogin(email, password)}>Login</Botao>
            <Caixa><input type="checkbox" /> Mostrar Senha</Caixa>

          <a href="" style={{
              textDecoration: "none",
              color: "blue",
              fontWeight: "bold",
              marginLeft: "5px",
              transition: "color 0.3s ease-in-out", // Adicione isso para o efeito hover
            }} > Criar conta</a>

          </form>  
        </Container>
         
        </>
    )
};

export default Login;