import {createContext, useState} from "react";

export const LvlContext = createContext();

const Toggle = ({children}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <LvlContext.Provider value={{toggle, setToggle}}>
            {children}
        </LvlContext.Provider>
    )
}

export default Toggle;