/**
 * Created by Aus on 2017/8/21.
 */
import * as actionType from './consts'

const updateInfoUsername = (data) => ({
    type: actionType.USER_INFO_UPDATE_USERNAME,
    payload: data
});

const updateInfoCustomData = (data) => ({
    type: actionType.USER_INFO_UPDATE_CUSTOM_DATA,
    payload: data
});

export default {
    updateInfoUsername,
    updateInfoCustomData
};