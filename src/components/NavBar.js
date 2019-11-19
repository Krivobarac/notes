import React, { useContext } from 'react'
import '../css/navbar.css'
import {ModalContext} from '../contexts/ModalContext'
import { NoteContext } from '../contexts/NoteContext'
import { TextContext } from '../contexts/TextContext'

export default function NavBar() {
    const {setIsModal, dispatchAddModal, dispatchUpdateModal} = useContext(ModalContext)
    const {notes, draftHolder, setDataHolder} = useContext(NoteContext)
    const {setTableTitle, setNoData, isChangedText, setIsChangedText} = useContext(TextContext)

    const openModal = () => {
        setIsModal(true)
        dispatchAddModal({type: "TURN_ON_ADD"})
        dispatchUpdateModal({type: "TURN_OF_UPDATE"})
    }

    const searchByTitle = value => {
        setTableTitle('All Notes')
        setNoData('Empty Notes')
        var patt = new RegExp(`^(${value})`, 'i');
        setDataHolder(() => {
            return notes.filter(note => patt.test(note.title))
        })
    }

    const showDrafts = () => {
        setDataHolder([...draftHolder])
        setTableTitle('All Drafts')
        setNoData('Empty Drafts')
        setIsChangedText(!isChangedText)
    }

    const showNotes = () => {
        setDataHolder([...notes])
        setTableTitle('All Notes')
        setNoData('Empty Notes')
        setIsChangedText(!isChangedText)
    }

    return (
        <nav>
            <div className="links">
                <h3 onClick={showNotes}>Notes</h3>
                <h6 onClick={showDrafts}>Drafts</h6>
            </div>
            <button className="new-button" type="submit" onClick={openModal}>New Note</button>
             <input className="search fas fa-search" type="search" placeholder='&#xf002; Search Notes' aria-label="Search" onChange={e => searchByTitle(e.target.value)} />
        </nav>
    )
}