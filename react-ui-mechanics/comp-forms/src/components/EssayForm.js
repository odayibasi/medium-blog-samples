import React, {Component} from 'react';

export class EssayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Bu kısma bir şeyler yazınız.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Gönderilen değer: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <div className='form-title'>Essay Form</div>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Gönder" />
            </form>
        );
    }
}
