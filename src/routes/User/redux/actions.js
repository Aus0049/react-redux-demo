/**
 * Created by Aus on 2017/8/21.
 */
import * as actionTypes from './actionTypes'

const updateInfoUsername = data => ({
    type: actionTypes.USER_INFO_UPDATE_USERNAME,
    payload: data,
});

const updateInfoCustomData = data => ({
    type: actionTypes.USER_INFO_UPDATE_CUSTOM_DATA,
    payload: data,
});

export default {
    updateInfoUsername,
    updateInfoCustomData,
};
