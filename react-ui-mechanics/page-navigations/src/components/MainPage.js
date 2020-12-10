import {routes} from '../routes';

export const MainPage = (props) => {

    return (<div className={'page-container'}>I'm a MainPage
        <button onClick={(e)=>props.handlePageChange(routes.login.path)}>Logout</button>
        <button onClick={(e)=>props.handlePageChange(routes.settings.path)}>SettingPage</button>
    </div>)
}
