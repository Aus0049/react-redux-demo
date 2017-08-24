/**
 * Created by Aus on 2017/8/21.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class Detail extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        // 进到页面去获取数据
        this.props.dispatch(actions.getDetailById(this.props.params.id));
    }
    componentWillUnmount () {
        // 页面卸载的时候 还原数据
        this.props.dispatch(actions.recoverDetail());
    }
    render () {
        const { title, content } = this.props.detail;

        return (
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail,
});

export default connect(mapStateToProps, dispatch => ({ ...bindActionCreators(actions, dispatch), dispatch }))(Detail)
