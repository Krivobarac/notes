import React, {createContext, useReducer, useEffect} from 'react'
import { modalReducer } from '../reducers/modalReducer'

export const ModalContext = createContext()

export default function ModalContextProvider(props) {
    const [modal, dispatchModal] = useReducer(modalReducer, 'modal')
    useEffect(() => {

    }, [modal])
    return (
        <ModalContext.Provider value={{modal, dispatchModal}}> 
            {props.children}
        </ModalContext.Provider>
    )
}
