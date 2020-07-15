import { Urls } from "@services/Url";
import {getInstance} from "@mock/MockHelper"
const axios = require('axios');
const fetchFromMock = true;

export const requestAPI = (API_NAME, payload) => {
    return new Promise((resolve, reject) => {
        if(fetchFromMock) return resolve(getInstance(API_NAME.URL));
        if (API_NAME.TYPE === "POST") {
            axios.post(`${Urls.BASE_URL}${API_NAME.URL}`, payload)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(Error(error));
                });
        } else {
            console.log(`${Urls.BASE_URL}${API_NAME.URL}${payload? payload : ""}`)
            axios.get(`${Urls.BASE_URL}${API_NAME.URL}${payload? payload : ""}`)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(Error(error));
                });
        }

    });
};
