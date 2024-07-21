import { PropsWithChildren, createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export let AuthContext = createContext(null);

export default function AuthContextProvider(props:PropsWithChildren){

    let [userData, setUserData] = useState(null);

    let saveUserData = () => {
        let encodedToken = localStorage.getItem('userToken');
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }

    return <AuthContext.Provider value={{saveUserData, userData}}>
        {props.children}
    </AuthContext.Provider>
}