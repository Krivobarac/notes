import React, { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import { NoteContext } from '../contexts/NoteContext'

export default function UpdateNote() {
    const {setIsModal, updateModal, dispatchUpdateModal} = useContext(ModalContext)
    const {dispatchNotes, note} = useContext(NoteContext)
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [author, setAuthor] = useState()
    const [date, setDate] = useState()
    const [info, setInfo] = useState('')

    useEffect(() => {
        setTitle(note.title)
        setBody(note.body)
        setAuthor(note.author)
        setDate(note.date)
    }, [note])

    const closeModal = () => {
        setIsModal(false)
        dispatchUpdateModal({ type: "TURN_OF_UPDATE" })
    }

    const updateNote = () => {
        if(!checkData()) {return}
        dispatchUpdateModal({type: "TURN_OF_UPDATE"})
        dispatchNotes({type: 'UPDATE_NOTE', note: {
            id: note.id,
            title,
            body,
            date,
            author,
            status: note.status
        }})
        setIsModal(false)
    }

    const checkData = () => {
        if(/^\s*$/.test(title)) {setInfo('Title is required!'); return false}
        if(/^\s*$/.test(body)) {setInfo('Body is required!'); return false}
        if(/^\s*$/.test(author)) {setInfo('Author is required!'); return false}
        return true
    }

    return (
        <div className={updateModal} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Update Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id="add-task-form" action="index.html">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" value={`${title}`} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <input type="text" className="form-control" id="body" value={`${body}`} onChange={(e) => setBody(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" className="form-control" value={`${date}`} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" value={`${author}`} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <span id="alertText"></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className='checkInfo'>{info}</div>
                        <button type="submit" className="btn btn-primary" onClick={updateNote}>Update Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
