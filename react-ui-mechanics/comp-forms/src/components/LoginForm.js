import React, {Component} from 'react';

const cities = ['none', 'Ankara', 'Istanbul', 'Izmir'];


export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            city: 'none',
            acceptTerm: false,
        }
    }


    handleUserNameChange = (event) => {
        const {value} = event?.target;
        this.setState({username: value});
    }

    handlePasswordChange = (event) => {
        const {value} = event?.target;
        this.setState({password: value});
    }

    handleCityChange = (event) => {
        const {value} = event?.target;
        this.setState({city: value});
    }

    handleTermChange = (event) => {
        const {checked} = event?.target;
        this.setState({acceptTerm: checked});
    }


    handleSubmit=(event) =>{
        event.preventDefault();
        console.log(this.state);
    }



    render() {
        const {username, password, city, acceptTerm} = this.state;
        const citiesVDOM = cities.map(el => (<option key={el}>{el}</option>))
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <div className='form-title'>Login Form</div>
                <input onChange={this.handleUserNameChange} type='text' value={username}/>
                <input onChange={this.handlePasswordChange} type='password' value={password}/>
                <label>Il sec<select onChange={this.handleCityChange} value={city}>{citiesVDOM}</select></label>
                <input onChange={this.handleTermChange} type='checkbox' value={acceptTerm}/>
                <input type="submit" value="Gönder"/>
            </form>


        )
    }

}
