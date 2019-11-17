import React, {useReducer, useEffect, createContext} from 'react'
import { noteReducer } from '../reducers/noteReducer'

export const NoteContext = createContext()

export default function NoteContextProvider(props) {
    const [notes, dispatchNotes] = useReducer(noteReducer, [])
    useEffect(() => {
    }, [notes])
    return (
        <NoteContext.Provider value={{notes, dispatchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
