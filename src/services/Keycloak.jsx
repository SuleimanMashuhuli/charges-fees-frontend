import Keycloak from "keycloak-js";


const kc = new Keycloak({
    realm: "process.env.REACT_APP_REALM",
    url: "process.env.REACT_APP_KEYCLOAK_SERVER",
    clientId: "process.env.REACT_APP_CLIENT_ID"
})

const initKeycloak = (onAuthenticated) => {
    kc.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    })
        .then((authenticated) => {
            if (authenticated) {
                if (onAuthenticated)
                    onAuthenticated();
            } else {
                console.log("Please Sign In again");
            }
        })
        .catch(error => {
            console.error("Keycloak initialization error:", error);
        });
};

const getIn = () => {
    return kc.login();
};

const getToken = () => {
    return kc?.token;
};

const loggedUser = () => {
    return !!kc?.token;
};

const refreshToken = (successCallback) => {
    return kc.updateToken(10)
        .then(successCallback)
        .catch(getIn);
};

const getName = () => {
    return kc.idTokenParsed?.name;
};

const getUsername = () => {
    return kc.tokenParsed?.preferred_username;
};

const hasRole = (role) => {
    return kc.tokenParsed?.realm_access?.roles?.includes(role) ?? false;
}

const getOut = () => {
    return kc.logout();
};
const KeycloakServices = {
    initKeycloak,
    getIn,
    getToken,
    loggedUser,
    refreshToken,
    getName,
    getUsername,
    hasRole,
    getOut
};


export default KeycloakServices;