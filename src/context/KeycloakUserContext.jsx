import { createContext, useState, useEffect } from "react";
import UserServices from "../services/UserService";

export const KeycloakUserContext = createContext();

const KeycloakUserProvider = ({ children }) => {
    const [chargeRules, setChargeRules] = useState([]);
    const [authenticated, setAuthenticated] = useState(null); 
    const [alert, setAlert] = useState(false);
    const [user, setUser] = useState();
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            if (UserServices.loggedUser()) {
                setAuthenticated(true);
                setUser({
                    name: UserServices.getName(),
                    username: UserServices.getUsername(),
                    token: UserServices.getToken(),
                });
            } else {
                setAuthenticated(false);
                setUser(undefined);
            }
        };

        checkAuth();
    }, []);

    if (authenticated === null) {
        return <div className="p-4 text-center text-gray-500">Loading authentication...</div>;
    }

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
    );
};

export default KeycloakUserProvider;
