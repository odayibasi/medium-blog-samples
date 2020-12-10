import './App.css';
import React from 'react';
import {LoginPage} from "./components/LoginPage";
import {MainPage} from "./components/MainPage";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activePage: 'loginPage'}
    }


    handlePageChange = (activePage) => {
        this.setState({activePage: activePage})
    }


    render() {

        const {activePage}=this.state;

        return (
            <div className="App">
                {activePage === 'loginPage' && <LoginPage handlePageChange={this.handlePageChange}/>}
                {activePage === 'mainPage' && <MainPage handlePageChange={this.handlePageChange}/>}
            </div>
        );

    }
}

export default App;
