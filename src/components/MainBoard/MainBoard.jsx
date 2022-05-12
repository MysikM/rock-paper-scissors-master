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
    const [choose, setChoose] = useState(false);

    useEffect(()=> {
        setItems(toggle ? boardItems : boardItems.slice(0, 3));
    }, [toggle])

    const setItem = (name) => {
        setItems(items.filter((item) => item.title === name));
        setChoose(!choose);
    }

    return (
        <div className='main-board' style={{backgroundImage: `${choose ? 'none' : `url(${toggle ? lvlUpBg : normalBg})`}`}} >
            <h5 className='main-board--choose' style={{opacity: `${choose ? 1: 0}`}}>Your choose</h5>
            {items.map((item) => (
                <BoardItem key={item.title} src={item.src} title={item.title} onClick={() => setItem(item.title)} choose={choose} />
            ))}
        </div>
    );
};

export default MainBoard;