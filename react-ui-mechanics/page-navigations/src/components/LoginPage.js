import {routes} from '../routes';


export const LoginPage = (props) => {

    return (<div className={'page-container'}>I'm a LoginPage
        <button onClick={(e)=>props.handlePageChange(routes.main.path)}>Login</button>
    </div>)
}
