import React from 'react';
import './match-board.scss';
import BoardItem from "../BoardItem/BoardItem";
import {boardItems} from "../../data/data";


const MatchBoard = () => {
    return (
        <section className='match'>
            <div className='match--player'>
                <h5>You picked</h5>
                <BoardItem src={boardItems[0].src} title={boardItems[0].title} choose={true}/>
            </div>
            <div className='match--menu'>
                <h2>You lose</h2>
                <button>Play again</button>
            </div>
            <div className='match--computer'>
                <h5>The house picked</h5>
                <BoardItem src={boardItems[1].src} title={boardItems[1].title} choose={true}/>
            </div>
        </section>
    );
};

export default MatchBoard;