/**
 * Created by Aus on 2017/8/21.
 */
import * as actionType from './consts'

// 初始化列表页数据
const listState = {
    list: []
};

// 列表页reducer
export function listReducer (state = listState, action) {
    switch (action.type){
        case actionType.LIST_LIST_UPDATE_LIST:
            state.list = action.payload;

            return {...state};
        default:
            return state;
    }
}

// 初始化详情页数据
const detailState = {
    title: undefined,
    content: undefined
};

// 详情页reducer
export function detailReducer (state = detailState, action) {
    switch (action.type){
        case actionType.LIST_DETAIL_INIT:
            const {title, content} = action.payload;

            state.title = title;
            state.content = content;

            return {...state};
        case actionType.LIST_DETAIL_RECOVER:
            state = detailState;

            return {...state};
        default:
            return state;
    }
}