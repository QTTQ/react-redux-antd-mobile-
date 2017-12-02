import "../util/Mock";
import Ajax from "../util/axios";
/**
 * Login
 * @param {*} url 
 */
export const LoginAction = (url) => {
    return dispatch => {
        Ajax.request(url).then(res => {
            if (res.status == 200) {
                dispatch(GetLoginDataAction(res.data.data.carouselBlogList));
            }
        })
    }
}
export const GetLoginDataAction = (data) => {
    return {
        type: "LOGIN",
        data
    }
}
/**
 * Content
 */

export const HideGoBackIocnAction = (data) => {
    return {
        type: "HIDEGOBACKIOCN",
        data
    }
}

export const NavTabTextAction = (data) => {
    return {
        type: "NAVTABTEXTACTION_TYPE",
        data
    }
}




