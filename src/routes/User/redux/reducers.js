/**
 * Created by Aus on 2017/8/21.
 */
import * as actionType from './consts'

// 如有公共方法 放在最前面
// 若多模块公用时候 单独拿出一个文件

// 初始化个人信息页数据
const infoState = {
    username: 'Aus',
    gender: 1,
    address: 'Beijing China'
};

// 个人信息页面的reducer
export function infoReducer (state = infoState, action) {
    switch (action.type){
        case actionType.USER_INFO_UPDATE_USERNAME:
            state.username = action.payload;

            return {...state};
        case actionType.USER_INFO_UPDATE_CUSTOM_DATA:
            state = Object.assign(state, action.payload);

            return {...state};
        default:
            return state;
    }
}