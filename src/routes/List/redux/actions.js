/**
 * Created by Aus on 2017/8/21.
 */
import * as actionTypes from './actionTypes'

function fetchList() {
    return (dispatch, getState) => {
        // 这里使用axios发送请求
        // 此处可以通过getState()获取到整个store的数据
        // 发送请求前处理数据

        // return axios.get('/ajax/xxxxxxx')
        //     .then(response => response.data)
        //     .catch(response => response.data)

        // 模拟接口
        return new Promise((resolve, reject)=>{

            const array = [
                {id: 'a1', title: 'this is title', content: 'this is content'},
                {id: 'b2', title: 'this is b2 title', content: 'this is content, 文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'},
                {id: 'c3', title: 'this is c3 title', content: 'this is 文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'},
                {id: 'd4', title: 'this is title d4', content: 'this is 文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'},
                {id: 'e5', title: 'this is e5 title', content: 'this is content 文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'}
            ];

            dispatch(updateList(array));

            resolve (array);
        });
    }
}

function getDetailById(id) {
    return (dispatch, getState) => {
        const {list} = getState().list;

        return new Promise(()=>{
            list.map((item)=>{
                if(item.id === id){
                    dispatch(initDetail(item));
                }
            });
        });
    }
}

const initDetail = (data) => ({
    type: actionTypes.LIST_DETAIL_INIT,
    payload: data
});

const updateList = (data) => ({
    type: actionTypes.LIST_LIST_UPDATE_LIST,
    payload: data
});

const recoverDetail = (data) => ({
    type: actionTypes.LIST_DETAIL_RECOVER,
    payload: data
});

export default {
    fetchList,
    getDetailById,

    initDetail,

    recoverDetail
};