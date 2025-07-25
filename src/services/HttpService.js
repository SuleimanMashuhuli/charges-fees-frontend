import axios from "axios";
import UserServices from "./UserService";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use(async (config) => {
        if (UserServices.loggedUser()) {
            await UserServices.updateToken();
            const token = UserServices.getToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
};

const getAxiosClient = () => _axios;

const HttpServices = {
    configure,
    getAxiosClient,
    HttpMethods,
};

export default HttpServices;