import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any ) => {
    const [login, setLogin] = useState(false);
    const [user,setUser] = useState({});


    const getUser = () => {
        api.get('/user/get-user').then(({data}) => {
        setUser(data.user)
        setLogin(true);
        }).catch((error) => {
         console.log("Usuario nao autenticado", error)
        })
    }

    useEffect(() => {
        getUser();
    }, [])


    const handleLogin = (email: string, password: string) => {
        api.post('/user/sing-in', {email , password}).then(({data}) => {
            setLogin(true);
            //Puxar os dados do usuario

            localStorage.setItem('token', data.token);
            getUser();
        }).catch((error) => {
            console.log("não foi possivel fazer o login", error);
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}

