import React, { useContext } from 'react'
import '../css/navbar.css'
import {ModalContext} from '../contexts/ModalContext'

export default function NavBar() {
    const {dispatchModal} = useContext(ModalContext)
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand" to="/notes">
                <h3>Notes</h3>
            </div>
            <button className="btn btn-sm add-new" type="submit" onClick={() => dispatchModal({type: "TURN_ON"})}>New Note</button>
            <form className="form-inline">
                <input className="form-control mr-sm-2 search" type="search" placeholder="Search Notes" aria-label="Search" />
            </form>
        </nav>
    )
}
