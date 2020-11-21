import React, {Component} from 'react';

class GitFetchView extends Component {

    constructor(props) {
        super(props);
        this.state = {gitName: 'gaearon'}
    }


    handleClick = () => {
        const {gitName} = this.state;
        this.props.getGitUser(gitName);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({gitName: e.target.value});
    }


    render() {
        const {gitName} = this.state;
        return (
            <div style={{width: '200px', borderColor: 'blue', borderStyle: 'solid', margin: '2px'}}>
                Git Fetch View
                <div>
                    <input type='text' onChange={this.handleChange} value={gitName}/>
                    <button onClick={this.handleClick}>Fetch</button>
                </div>

            </div>
        )
    }

}

export default GitFetchView;