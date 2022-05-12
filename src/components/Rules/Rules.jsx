import React, {useState} from 'react';
import './rules.scss';

const Rules = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <button className='rules--btn' onClick={() => setIsOpen(true)}>
                Rules
            </button>
            <div className='rules--modal'>
                <div className="rules--container">
                    sss
                </div>
            </div>
        </>
    );
};

export default Rules;