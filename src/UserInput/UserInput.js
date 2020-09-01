import React, {Component} from 'react';

class UserInput extends Component {

    render() {
        const style = {
            width: '60%',
            margin: "16px auto",
            backgroundColor: 'white',
            border: '1px solid blue',
        };
        return <p style={{textAlign: "center"}}><input style={style} type="text"
                                                       onChange={this.props.change}
                                                       defaultValue={this.props.name}/>;
        </p>
    }
}

export default UserInput;
