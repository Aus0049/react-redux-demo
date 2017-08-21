/**
 * Created by Aus on 2017/8/21.
 */
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        this.props.dispatch(actions.fetchList());
    }
    getListDOM () {
        const {list} = this.props.list;
        const result = [];
        list.map((item)=>{
            result.push(<li key={item.id}>
                <Link to={'/list/detail/' + item.id}>{item.title}</Link>
            </li>);
        });

        return result;
    }
    render () {
        const listDOM = this.getListDOM();

        return <div>
            <ul>
                {listDOM}
            </ul>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    list: state.list
});

export default connect(mapStateToProps,dispatch=> {return { ...bindActionCreators(actions,dispatch), dispatch }})(List)