/**
 * Created by Aus on 2017/8/21.
 */
import { injectReducer } from '../../store/reducers'

export default store => ({
    path: 'list',
    getComponents (location, callback) {
        require.ensure([], (require) => {
            const { listReducer } = require('./redux/index')['default'];
            injectReducer(store, { key: 'list', reducer: listReducer });

            callback(null, require('./containers/List')['default'])
        }, 'list/list')
    },
})
