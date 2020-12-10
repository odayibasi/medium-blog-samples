import {withRouter} from 'react-router-dom'

const CompanyPage = (props) => {

    const {company} = props.match.params;

    return (
        <div className={'page-container'}>
            I'm a {company} Company Page
        </div>)
}


export const CompanyPageWithRouter=withRouter(CompanyPage);
