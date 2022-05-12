import {createContext, useState} from "react";

export const ScoreContext = createContext();

const Score = ({children}) => {
    const [score, setScore] = useState(0);
    return (
        <ScoreContext.Provider value={{score, setScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default Score;