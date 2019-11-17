import React, { useContext, useState } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import { NoteContext } from '../contexts/NoteContext'

export default function AddNote() {
    const {modal, dispatchModal} = useContext(ModalContext)
    const {dispatchNotes} = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('normal')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [author, setAuthor] = useState('')

    const addNote = () => {
        dispatchNotes({type: 'ADD_NOTE', note: {
            title,
            body,
            priority,
            date,
            time,
            author
        }})
    }

    return (
        <div className={modal} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Add New Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => dispatchModal({ type: "TURN_OF" })}>
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
                                <label>Priority</label>
                                <select className="form-control" defaultValue={priority} id="priority">
                                    <option value="low" onChange={(e) => setPriority(e.target.value)} >Low</option>
                                    <option value="normal" onChange={(e) => setPriority(e.target.value)} >Normal</option>
                                    <option value="high" onChange={(e) => setPriority(e.target.value)} >High</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" className="form-control"  value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <input type="time" id="time" className="form-control"  value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="task">Author</label>
                                <input type="text" className="form-control" id="task" placeholder="Enter Author"  value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <span id="alertText"></span>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={addNote}>Add Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
