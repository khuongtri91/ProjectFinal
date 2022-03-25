import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}
export function UserProvider( { children } ) {
   

    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}
