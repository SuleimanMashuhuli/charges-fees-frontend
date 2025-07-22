import Keycloak from "keycloak-js";


const kc = new Keycloak({
    realm: "process.env.REACT_APP_REALM",
    url: "process.env.REACT_APP_KEYCLOAK_SERVER",
    clientID: "process.env.REACT_APP_CLIENT_ID"
})

const initializeKeycloak = (onAuthenicated) => {
    kc.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    })
    .then((authenticated) => {
        if (authenticated) {
            if (onAuthenicated)
                onAuthenicated();
        }
        else {
            console.log("Please SIgn In again")
        }
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

const getOut = () => {
    return kc.logout();
};
const KeycloakServices = {
    initializeKeycloak,
    getIn,
    getToken,
    loggedUser,
    refreshToken,
    getName,
    getUsername,
    getOut
};


export default KeycloakServices;