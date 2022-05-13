import React, {useContext} from 'react';
import {LvlContext} from "../../context/Toggle";
import './board-item.scss';

const BoardItem = ({src, title, onClick, choose, isWin}) => {
    const {toggle} = useContext(LvlContext);

    return (
        <div className={`item ${title} ${toggle && 'lvlUp'} ${choose && 'choose'} ${isWin && 'win'}`} onClick={onClick}>
            <button className='item--container'>
                <span className='item--wrapper'>
                    <img src={src} alt={title}/>
                </span>
            </button>
        </div>
    );
};

export default BoardItem;