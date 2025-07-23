import { Children, createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";

export const KeycloakUserContext = createContext();

const KeycloakUserProvider = ({ children }) => {
    const [chargeRules, setChargeRules] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [alert, setAlert] = useState(false);
    const [user, setUser] = useState();
    const [login, setLogin] = useState(false);

    return (
        <KeycloakUserContext.Provider value={{
            chargeRules, setChargeRules,
            authenticated, setAuthenticated,
            alert, setAlert,
            user, setUser,
            login, setLogin
        }}>
            {children}
        </KeycloakUserContext.Provider>
    )
}

export default KeycloakUserProvider