import React, {Component} from 'react';
import './UserOutput.css';

class UserOutput extends Component {
    render() {
        return <div className={"UserOutput"}><p>p1: {this.props.username}</p>
            <p>p2</p></div>
    }
}

export default UserOutput
