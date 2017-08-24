/**
 * Created by Aus on 2017/8/21.
 */
import { injectReducer } from '../../store/reducers'

export default store => ({
    path: 'user',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            // 拿到reducer和store 动态注入节点
            const { infoReducer } = require('./redux/index')['default'];
            injectReducer(store, { key: 'info', reducer: infoReducer });

            const Info = require('./containers/info')['default'];

            cb(null, Info);
        })
    },
})
