import { createContext, useContext, useReducer } from "react";

const Context = createContext()

export const StateProvuider= ({reducer, initialState, children}) =>{
    return <Context.Provider value={useReducer(reducer, initialState)}>{children}</Context.Provider>
}

export const useStateValue = ()=> useContext(Context)