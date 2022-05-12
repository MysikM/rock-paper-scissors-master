import React from 'react';
import './header.scss';
import Titles from "../Titles/Titles";
import Score from "../Score/Score";


const Header = () => {
    return (
        <header className='header'>
            <div className='header--container'>
                <Titles />
                <Score />
            </div>
        </header>
    );
};

export default Header;