import React, {Component} from 'react';
import './ContactForm.css';

class ContactForm extends Component {

    render() {
        return (
            <div className="ContactForm">
                Для регистрации заполните поле
                <input type="text" placeholder="Ваше имя"/>
                <input type="text" placeholder="Ваша фамилия"/>
                <input type="text" placeholder="Ваш e-mail"/>
                <input type="submit"/>
            </div>
        )
    }
}
export default ContactForm;
