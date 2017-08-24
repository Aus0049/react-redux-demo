/**
 * Created by Aus on 2017/8/21.
 */

export default store => ({
    path: 'list',
    getChildRoutes (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./List')['default'](store),
                require('./Detail')['default'](store),
            ]);
        })
    },
})
