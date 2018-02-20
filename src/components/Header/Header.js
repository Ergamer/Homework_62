import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <NavLink to="/"><img className="Logo" src="img/logo.png" alt=""/></NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/about" className="Links">About</NavLink></li>
                        <li><NavLink to="/contact" className="Links">Contact</NavLink></li>
                        <li><NavLink to="/" className="Links">Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header;