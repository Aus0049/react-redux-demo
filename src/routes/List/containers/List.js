/**
 * Created by Aus on 2017/8/21.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import { getListDOM } from '../util/'

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        this.props.dispatch(actions.fetchList())
            .then((result) => {
                // 在业务层里进行报错提示等业务操作
                if (result) {
                    console.log('获取数据成功');
                }
            });
    }
    render () {
        const listDOM = getListDOM(this.props.list);

        return (
            <div>
                <ul>
                    {listDOM}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.list,
});

export default connect(mapStateToProps, dispatch => ({ ...bindActionCreators(actions, dispatch), dispatch }))(List)
