import React, { useReducer, useEffect, createContext, useState } from 'react'
import { noteReducer } from '../reducers/noteReducer'

var data = require('../data/notes.json');

export const NoteContext = createContext()

export default function NoteContextProvider(props) {
    const [notes, dispatchNotes] = useReducer(noteReducer, [], () => {
        if(data) return data
        else return []
    })
    const [note, setNote] = useState('')
    const [notesHolder, setNotesHolder] = useState(notes)
    const [draftHolder, setDraftsHolder] = useState([])
    const [dataHolder, setDataHolder] = useState([])


    useEffect(() => {
        setDataHolder(notes)
    }, [notes])

    return (
        <NoteContext.Provider value={
            {
                notes,
                dispatchNotes,
                note, setNote,
                notesHolder,
                setNotesHolder,
                draftHolder,
                setDraftsHolder,
                dataHolder,
                setDataHolder
            }
        }>
            {props.children}
        </NoteContext.Provider>
    )
}