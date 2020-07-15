import {
  SEARCH_SUCCESS,
  SEARCH_STARTED,
  SEARCH_ERROR
} from './Types';

import {Urls} from "@services/Url";
import {requestAPI} from "@services/Services";

const reduxAction = (type, data) => {
 return {type, data}
}

export const searchMovies = (payload) => {

  return dispatch => {
        requestAPI(payload)
          .then(function (res) {
                dispatch(reduxAction(SEARCH_SUCCESS, res));
          })
          .catch(function (error) {
            dispatch(reduxAction(SEARCH_ERROR, error));
          });
  };
};