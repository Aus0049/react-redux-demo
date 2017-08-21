/**
 * Created by Aus on 2017/8/21.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class Info extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChangeUsername (e) {
        this.props.dispatch(actions.updateInfoUsername(e.target.value));
    }
    handleChange (id, e) {
        this.props.dispatch(actions.updateInfoCustomData({[id]: e.target.value}));
    }
    render () {
        const {username, gender, address} = this.props.info;

        return <div>
            <input type="text" value={username} onChange={this.handleChangeUsername} />
            <br/>
            <select name="" id="" value={gender} onChange={this.handleChange.bind(this, 'gender')}>
                <option value={0}>未知</option>
                <option value={1}>男</option>
                <option value={2}>女</option>
            </select>
            <br/>
            <input type="text" value={address} onChange={this.handleChange.bind(this, 'address')} />
        </div>;
    }
}

const mapStateToProps = (state) => ({
    info: state.info
});

export default connect(mapStateToProps,dispatch=> {return { ...bindActionCreators(actions,dispatch), dispatch }})(Info)