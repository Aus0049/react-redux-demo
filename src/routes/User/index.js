/**
 * Created by Aus on 2017/8/21.
 */
import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'user',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const {infoReducer} = require('./redux/index').default;
            injectReducer(store, { key: 'info', reducer: infoReducer });

            const Info = require('./containers/info').default;

            cb(null, Info);
        })
    }
})