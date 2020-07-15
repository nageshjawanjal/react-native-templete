import { Urls } from "@services/Url";
import Response from "@mock/Response.json"

export const getInstance = (URL) => {
    console.log("getInstance: ", URL);
    switch(URL) {
        case Urls.GET_LOGIN_DETAILS.URL:
            return Response.login
        case Urls.GET_USER_LIST.URL:
            return Response.getUserList
            default:
                return {"Empty":"No data found"}
    }
}