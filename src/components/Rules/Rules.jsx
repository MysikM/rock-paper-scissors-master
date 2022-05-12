import React, {useContext, useState} from 'react';
import './rules.scss';
import closeIcon from '../../assets/images/icon-close.svg';
import rules from '../../assets/images/image-rules.svg';
import rulesBonus from '../../assets/images/image-rules-bonus.svg';
import {LvlContext} from "../../context/Toggle";

const Rules = () => {
    const {toggle} = useContext(LvlContext);
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <button className='rules--title__btn' onClick={() => setIsOpen(true)}>
                Rules
            </button>
            {isOpen && (
                <div className='rules--modal' onClick={() => setIsOpen(false)}>
                    <div className="rules--container" onClick={(e) => e.stopPropagation()}>
                        <h4 className='rules--title'>Rules</h4>
                        <img className='rules--img' src={`${toggle ? rulesBonus :rules}`} alt="rules img"/>
                        <button className='rules--btn' onClick={() => setIsOpen(false)}>
                            <img src={closeIcon} alt="close icon"/>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Rules;