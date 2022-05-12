import React, {useContext} from 'react';
import logoBasic from '../../assets/images/logo.svg';
import logoLvlTrue from '../../assets/images/logo-bonus.svg';
import {LvlContext} from "../../context/Toggle";
import './titles.scss';

const Titles = () => {
    const {toggle} = useContext(LvlContext);
    return (
        <img className='logo' src={`${toggle ? logoLvlTrue : logoBasic}`} alt="logo"/>
    );
};

export default Titles;