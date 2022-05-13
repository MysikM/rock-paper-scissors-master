import React, {createContext, useState} from 'react';

export const UserItem = createContext();

const UserSelectItem = ({children}) => {
    const [userPickContext, setUserPickContext] = useState('');
    return (
        <UserItem.Provider value={{userPickContext, setUserPickContext}}>
            {children}
        </UserItem.Provider>
    );
};

export default UserSelectItem;