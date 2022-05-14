import React, {useCallback, useContext, useEffect, useState} from 'react';
import './main-board.scss';
import {LvlContext} from "../../context/Toggle";
import normalBg from '../../assets/images/bg-triangle.svg';
import lvlUpBg from '../../assets/images/bg-pentagon.svg';
import {boardItems} from "../../data/data";
import BoardItem from "../BoardItem/BoardItem";
import {GameStatus} from "../../context/Start";
import {UserItem} from "../../context/UserSelectItem";

const MainBoard = () => {
    const {toggle} = useContext(LvlContext);
    const {setIsGameStart} = useContext(GameStatus);
    const [items, setItems] = useState(toggle ? boardItems : boardItems.slice(0, 3));
    const [choice, setChoice] = useState(false);
    const {setUserPickContext} = useContext(UserItem);

    useEffect(()=> {
        setItems(toggle ? boardItems : boardItems.slice(0, 3));
    }, [toggle]);

    const gameStart = useCallback(()=>{
        setTimeout(()=>{
            setIsGameStart(true);
        },3000);
    }, [choice])

    const setItem = (name) => {
        setItems(items.filter((item) => item.title === name));
        setChoice(!choice);
        gameStart();
        setUserPickContext(name);
    }

    return (
        <div className='main-board' style={{backgroundImage: `${choice ? 'none' : `url(${toggle ? lvlUpBg : normalBg})`}`}} >
            <h5 className='main-board--choose' style={{opacity: `${choice ? 1: 0}`}}>Your choice</h5>
            {items.map((item) => (
                <BoardItem key={item.title} src={item.src} title={item.title} onClick={() => setItem(item.title)} choose={choice} />
            ))}
        </div>
    );
};

export default MainBoard;