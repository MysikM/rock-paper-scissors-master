import React, {useContext} from 'react';
import './switcher.scss';
import {LvlContext} from "../../context/Toggle";
import {UserItem} from "../../context/UserSelectItem";

const Switcher = () => {
    const {toggle, setToggle} = useContext(LvlContext);
    const {userPickContext} = useContext(UserItem);

    if (userPickContext) {
        return <div/>
    }
    return (
        <div className='switcher'>
            <h6 className='switcher--title'>Mode</h6>
            <input
                id='switcher'
                className="switcher--input"
                value={toggle}
                onChange={() => setToggle(!toggle)}
                checked={toggle}
                type="checkbox"
            />
            <label className='switcher--custom' htmlFor='switcher'/>
        </div>
    );
};

export default Switcher;