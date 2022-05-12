import React from 'react';
import './match-board.scss';
import BoardItem from "../BoardItem/BoardItem";
import {boardItems} from "../../data/data";


const MatchBoard = () => {
    return (
        <section className='match'>
            <div className='match--player'>
                <BoardItem key={boardItems[0].title} src={boardItems[0].src} title={boardItems[0].title} choose={true}/>
            </div>
        </section>
    );
};

export default MatchBoard;