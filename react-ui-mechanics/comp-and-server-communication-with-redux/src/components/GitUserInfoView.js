import React, {Component} from 'react';

class GitUserInfoView extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        const {gitUser, fetching} = this.props.gitUser;

        if (fetching) {
            return (
                <div>
                    YUKLENIYOR.....
                </div>
            )
        } else {
            return (
                <div style={{ borderColor: 'blue', borderStyle: 'solid', margin: '2px'}}>
                    Git User Info
                    <pre>
                        {JSON.stringify(gitUser,null,2)}
                    </pre>

                </div>
            )

        }


    }

}

export default GitUserInfoView;