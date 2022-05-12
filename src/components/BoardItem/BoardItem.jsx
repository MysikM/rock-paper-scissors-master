import React, {useContext} from 'react';
import {LvlContext} from "../../context/Toggle";

const BoardItem = ({src, title}) => {
    const {toggle} = useContext(LvlContext);

    return (
        <div className={`board ${title} ${toggle && 'lvlUp'}`}>
            {title}
        </div>
    );
};

export default BoardItem;