import {useContext, useEffect, useState} from "react";
import {LvlContext} from "../context/Toggle";
import {boardItems, modeOnGame, namesFigure} from "../data/data";

export const useGameLogic = () => {
    const {toggle} = useContext(LvlContext);
    const [userSelect, setUserSelect] = useState('');
    const [computerSelect, setComputerSelect] = useState('');

    function computerPick () {
        const pick =  boardItems[Math.floor(Math.random() * ((toggle ? boardItems.length: boardItems.slice(0,3).length)) - 1) + 1].title
        return namesFigure[`${pick}`]
    }

    useEffect(()=>{
        if(userSelect) {
            setComputerSelect(computerPick());
        }
    }, [userSelect])


    const match = ()=> {
        let res = 0;
        if (modeOnGame[`${computerSelect}`].includes(userSelect))
            res = -1
        if (modeOnGame[`${userSelect}`].includes(computerSelect))
            res = 1;
        return res;
        }

    return {userSelect, setUserSelect, computerSelect, match};
}