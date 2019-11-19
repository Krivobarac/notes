import React, { useContext, useEffect } from 'react'
import '../css/shownotes.css'
import { NoteContext } from '../contexts/NoteContext'
import { ModalContext } from '../contexts/ModalContext'
import { TextContext } from '../contexts/TextContext'

export default function ShowNotes() {
    const { setDataHolder, dispatchNotes, setNote, dataHolder, setDraftsHolder, draftHolder } = useContext(NoteContext)
    const { setIsModal, isModal, dispatchUpdateModal } = useContext(ModalContext)
    const { tableTitle, setTableTitle, noData, setNoData } = useContext(TextContext)

    const deleteNote = id => {
        dispatchNotes({ type: 'DELETE_NOTE', id: id })
    }

    const updateNote = note => {
        setIsModal(true)
        dispatchUpdateModal({ type: "TURN_ON_UPDATE" })
        setNote(note)
    }

    const completeNote = note => {
        dispatchNotes({
            type: 'UPDATE_NOTE', note: {
                id: note.id,
                title: note.title,
                body: note.body,
                date: note.date,
                author: note.author,
                status: 'Complete'
            }
        })
    }

    const clearAll = () => {
        dispatchNotes({ type: 'CLEAR_ALL' })
    }

    const sort = () => {
        dispatchNotes({ type: 'SORT', notes: dataHolder })
    }

    const saveDraft = draft => {
        setTableTitle('All Notes')
        setNoData('Empty Notes')
        setDraftsHolder(draftHolder.filter(drf => drf.id !== draft.id))
        dispatchNotes({
            type: 'ADD_NOTE', note: {
                title: draft.title,
                body: draft.body,
                author: draft.author,
                status: 'Uncomplete',
            }
        })
    }

    useEffect(() => {
        setDataHolder(draftHolder)
    }, [setDataHolder, draftHolder])

    return (
        isModal
            ? null
            : <main>
                <h2 className="page-header">{tableTitle}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Date</th>
                            <th>Author</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {dataHolder.length > 0 && dataHolder.map(note => {
                        return <tbody key={note.id}>
                            <tr>
                                <td>{note.title}</td>
                                <td>{note.body}</td>
                                <td>{note.date}</td>
                                <td>{note.author}</td>
                                <td>{note.status}</td>
                                {tableTitle === 'All Notes' &&
                                    <td>
                                        <span onClick={() => updateNote(note)}><i className="fas fa-edit"></i></span>
                                        <span onClick={() => deleteNote(note.id)}><i className="fas fa-trash-alt"></i></span>
                                        <span onClick={() => completeNote(note)}><i className="fas fa-check-circle"></i></span>
                                    </td>}
                                {tableTitle !== 'All Notes' &&
                                    <td>
                                        <span onClick={() => saveDraft(note)}><i className="fas fa-check-circle"></i></span>
                                    </td>}
                            </tr>
                        </tbody>
                    })
                    }
                </table>
                {dataHolder.length === 0 && <h3>{noData}</h3>}
                {(tableTitle === 'All Notes' || !dataHolder.length) &&
                <div className='buttons'>
                    <button type="button" onClick={clearAll}>Clear All</button>
                    <button type="button" onClick={sort}>Sort</button>
                </div>}
            </main>
    )
}
