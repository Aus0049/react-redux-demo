/**
 * Created by Aus on 2017/8/21.
 */
import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'detail/:id',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            const {detailReducer} = require('./redux/index').default;
            injectReducer(store, { key: 'detail', reducer: detailReducer });

            callback(null, require('./containers/Detail').default)
        })
    }
})
