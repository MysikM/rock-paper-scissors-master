import React, {useContext, useEffect, useState} from 'react';
import './main-board.scss';
import {LvlContext} from "../../context/Toggle";
import normalBg from '../../assets/images/bg-triangle.svg';
import lvlUpBg from '../../assets/images/bg-pentagon.svg';
import {boardItems} from "../../data/data";
import BoardItem from "../BoardItem/BoardItem";

const MainBoard = () => {
    const {toggle} = useContext(LvlContext);
    const [items, setItems] = useState(toggle ? boardItems : boardItems.slice(0, 3));

    useEffect(()=> {
        setItems(toggle ? boardItems : boardItems.slice(0, 3));
    }, [toggle])

    return (
        <div className='main-board' style={{backgroundImage: `url(${toggle ? lvlUpBg : normalBg})`}}>
            {items.map((item) => (
                <BoardItem src={item.src} title={item.title} />
            ))}
        </div>
    );
};

export default MainBoard;