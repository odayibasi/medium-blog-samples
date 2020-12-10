import {routes} from '../routes';


export const SettingsPage = (props) => {

    return (<div className={'page-container'}>I'm a Setting Page
        <button onClick={(e)=>props.handlePageChange(routes.main.path)}>Main</button>
    </div>)
}
