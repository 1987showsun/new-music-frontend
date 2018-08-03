import Axios from 'axios';

export function getAxios(apiUrl,params){
    return Axios.get(`${apiUrl}`,{params}).then(res => {
        return res['data'];
    })
}

Axios.interceptors.request.use(function (config) {
    config['Authorization'] = sessionStorage.getItem("Authorization") || "";
    return config;
}, function (error) {
    return Promise.reject(error);
});