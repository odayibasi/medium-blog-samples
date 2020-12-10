export const SettingsPage = (props) => {

    return (<div className={'page-container'}>I'm a Setting Page
        <button onClick={(e)=>props.handlePageChange('/main')}>Main</button>
    </div>)
}
