import { useState,useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Container } from "./styles";



function Login(){
  const { handleLogin } = useContext(UserContext);


    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');


    return (
        <>
        <Container>
          <form >
            <img src={require('./google-logo.png').default} alt="Ícone do Google" className="icon" />
            <div>Fazer Login</div>
            <span>Use sua Conta do Google</span>
            <input type="email" value={email} onChange= {(e) => setEmail(e.target.value)}  />
            <input type="password" value={password} onChange= {(e) => setPassword(e.target.value)}  />
            <button onClick={() => handleLogin(email, password)}>Login</button>

          </form>  
        </Container>
         
        </>
    )
};

export default Login;