import {
    LOGIN_SUCCESS,
    LOGIN_STARTED,
    LOGIN_ERROR
} from "@utils/Types";

import {Urls} from "@services/Url";
import {requestAPI} from "@services/Services";

const reduxAction = (type, data) => {
    return { type, data }
}

export const handleLogin = () => {
    
    return dispatch => {
          requestAPI(Urls.GET_LOGIN_DETAILS, {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
            .then(function (res) {
                    console.log("res: ", res);
                  dispatch(reduxAction(LOGIN_SUCCESS, res));
            })
            .catch(function (error) {
                console.log("error: ",error);
            });
    };
};

export const getUserList = () => {
    return dispatch => {
          requestAPI(Urls.GET_USER_LIST,"page=2")
            .then(function (res) {
                console.log("res: ", res);
                  dispatch(reduxAction(LOGIN_SUCCESS, res));
            })
            .catch(function (error) {
                console.log("error: ",error);
            });
    };
};

