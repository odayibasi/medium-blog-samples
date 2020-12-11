import React, {Component} from 'react';
import ReactJson from 'react-json-view'


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
                <div style={{borderColor: 'blue', borderStyle: 'solid', margin: '2px'}}>
                    Git User Info
                    <div style={{border:'2px solid #fdafda'}}>
                        <pre>
                            {JSON.stringify(gitUser, null, 2)}
                        </pre>
                    </div>
                    <div style={{border:'2px solid #cdafda'}}>
                        <ReactJson src={gitUser}/>
                    </div>


                </div>
            )

        }


    }

}

export default GitUserInfoView;
