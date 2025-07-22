import Keycloak from "keycloak-js";


const kc = new Keycloak({
    realm: "MY REALM APP",
    url: "KEYCLOAK SERVER URL",
    clientID: "MY CLIENT ID"
})

const initializeKeycloak = (onAuthenicated) => {
    kc.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
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
        .catch(makeLogin);
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