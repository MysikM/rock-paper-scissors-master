import React from 'react';
import './footer.scss';
import Switcher from "../Switcher/Switcher";
import Rules from "../Rules/Rules";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer--container">
                <Switcher />
                <Rules />
            </div>
        </footer>
    );
};

export default Footer;