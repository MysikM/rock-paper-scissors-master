import React, {useContext} from 'react';
import {ScoreContext} from "../../context/Score";
import './score.scss';

const Score = () => {
    const {score} = useContext(ScoreContext);
    return (
        <div className='score'>
            <span className='score--title'>score</span>
            <span className='score--amount'>{score}</span>
        </div>
    );
};

export default Score;