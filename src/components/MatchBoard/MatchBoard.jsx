import React, {useCallback, useContext, useEffect, useLayoutEffect, useState} from 'react';
import './match-board.scss';
import BoardItem from "../BoardItem/BoardItem";
import {boardItems} from "../../data/data";
import {useGameLogic} from "../../hooks/useGameLogic";
import {UserItem} from "../../context/UserSelectItem";
import {ScoreContext} from "../../context/Score";


const MatchBoard = () => {
    const {setUserSelect, computerSelect, match} = useGameLogic();
    const {score, setScore} = useContext(ScoreContext);
    const {userPickContext} = useContext(UserItem);
    const [isWin, setIsWin] = useState(false)
    const [computerItemDisplay, setComputerItemDisplay] = useState('');
    const [userItemDisplay, setUserItemDisplay] = useState('');
    useLayoutEffect(()=>{
        setUserSelect(userPickContext);
    },[]);

    useEffect(()=>{
        if(computerSelect) {
            setUserItemDisplay(...boardItems.filter((item) => item.title === userPickContext));
            setComputerItemDisplay(...boardItems.filter((item) => item.title === computerSelect));
            const rez = match();
            setTimeout(()=>{
                setScore(rez > 0 ? score + 1 : (rez === 0) ? score : score - 1);
                setIsWin(rez > 0 ? 'you win' : (rez === 0) ? 'tie' : 'you lose');
            }, 2000);
        }
    },[computerSelect])

    return (
        <section className='match'>
            {userItemDisplay && (
                <div className='match--player'>
                    <h5>You picked</h5>
                    <BoardItem src={userItemDisplay.src} title={userItemDisplay.title} choose={true} isWin={isWin === 'you win'}/>
                </div>
            )}
            {isWin && (
                <div className='match--menu'>
                    <h2>{isWin}</h2>
                    <button>Play again</button>
                </div>
            )}
            {computerItemDisplay && (
                <div className='match--computer' >
                    <h5>The house picked</h5>
                    <BoardItem src={computerItemDisplay.src} title={computerItemDisplay.title} choose={true} isWin={isWin === 'you lose'}/>
                </div>
            )}
        </section>
    );
};

export default MatchBoard;