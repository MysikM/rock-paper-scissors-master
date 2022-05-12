import {createContext, useState} from "react";

export const GameStatus = createContext();

const Start = ({children}) => {
    const [isGameStart, setIsGameStart] = useState(false);
    return (
        <GameStatus.Provider value={{isGameStart, setIsGameStart}}>
            {children}
        </GameStatus.Provider>
    )
}

export default Start;