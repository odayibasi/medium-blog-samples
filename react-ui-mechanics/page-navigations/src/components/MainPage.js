export const MainPage = (props) => {

    return (<div className={'page-container'}>I'm a MainPage
        <button onClick={(e)=>props.handlePageChange('loginPage')}>Logout</button>
    </div>)
}
