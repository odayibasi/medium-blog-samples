export const MainPage = (props) => {

    return (<div className={'page-container'}>I'm a MainPage
        <button onClick={(e)=>props.handlePageChange('/')}>Logout</button>
        <button onClick={(e)=>props.handlePageChange('/settings')}>SettingPage</button>
    </div>)
}
