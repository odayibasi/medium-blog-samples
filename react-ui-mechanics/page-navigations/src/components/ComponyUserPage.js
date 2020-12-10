import {withRouter} from 'react-router-dom';

const CompanyUserPage = (props) => {

    const {company, user} = props.match.params;

    return (
        <div className={'page-container'}>
            My name is  {user} . I work {company}
        </div>)
}

export const CompanyUserPageWithRouter = withRouter(CompanyUserPage);
