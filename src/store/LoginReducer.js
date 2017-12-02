import { fromJS } from 'immutable';

// 初始化state数据
const initialState = {
    LoginData: 0
};

/**
 * 公共reducer
 * @return
 */
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': // 用于页面和区块的加载中状态
            return fromJS(state).merge({ LoginData: action.data }).toJS();
        default:
            return state;
    }
}
export { LoginReducer }