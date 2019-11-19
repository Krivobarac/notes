import React, { useContext, useState } from 'react'
import '../css/addNote.css'
import { ModalContext } from '../contexts/ModalContext'
import { NoteContext } from '../contexts/NoteContext'
import { TextContext } from '../contexts/TextContext'

export default function AddNote() {
    const {setIsModal, addModal, dispatchAddModal} = useContext(ModalContext)
    const {dispatchNotes, draftHolder, setDraftsHolder} = useContext(NoteContext)
    const {setTableTitle, setNoData} = useContext(TextContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState(null)

    const closeModal = () => {
        setIsModal(false)
        dispatchAddModal({ type: "TURN_OF_ADD" })
    }

    const addNote = () => {
        if(!checkData()) {return}
        dispatchAddModal({type: "TURN_OF_ADD"})
        dispatchNotes({type: 'ADD_NOTE', note: {
            title,
            body,
            author
        }})
        setTitle('')
        setBody('')
        setAuthor('')
        setIsModal(false)
    }

    const draftNote = () => {
        if(!checkData()) {return}
        const date = new Date()
        const draft = {
            id: draftHolder.length + 1,
            title,
            body,
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            author,
            status: 'On Wait'
        }
        setDraftsHolder([...draftHolder, draft])
        dispatchAddModal({ type: "TURN_OF_ADD" })
        setIsModal(false)
        setTableTitle('All Drafts')
        setNoData('Empty Drafts')
    }

    const checkData = () => {
        if(/^\s*$/.test(title)) {setInfo('Title is required!'); return false}
        if(/^\s*$/.test(body)) {setInfo('Body is required!'); return false}
        if(/^\s*$/.test(author)) {setInfo('Author is required!'); return false}
        return true
    }
    
    return (
        <div className={addModal} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Add New Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="add-task-form" action="index.html">
                            <div className="form-group">
                                <label htmlFor="task">Title</label>
                                <input type="text" className="form-control" id="task" placeholder="Enter Task" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="task">Body</label>
                                <input type="text" className="form-control" id="task" placeholder="Enter Body" value={body} onChange={(e) => setBody(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="task">Author</label>
                                <input type="text" className="form-control" id="task" placeholder="Enter Author"  value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <span id="alertText"></span>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className='checkInfo'>{info}</div>
                        <button type="button" className="btn btn-primary" onClick={addNote}>Add Note</button>
                        <button type="button" className="btn btn-primary" onClick={draftNote}>Draft Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
