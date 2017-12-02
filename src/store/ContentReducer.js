import { fromJS } from 'immutable';

// 初始化state数据
const initialState = {
    LoginData: 0,
    HideIconData: null,
    NavTabTextData:'首页'
};


export const HideGoBackIocnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDEGOBACKIOCN': // 用于页面和区块的加载中状态
            return fromJS(state).merge({ HideIconData: action.data }).toJS();
        default:
            return state;
    }
}
export const NavTabTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NAVTABTEXTACTION_TYPE': // 用于页面和区块的加载中状态
            console.log(action.data);
            return fromJS(state).merge({ NavTabTextData: action.data }).toJS();
        default:
            return state;
    }
}

