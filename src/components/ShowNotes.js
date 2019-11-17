import React from 'react'
import {Button} from 'react-bootstrap'
import '../css/shownotes.css'

export default function ShowNotes() {
    return (
        <div className="container">
            <h2 className="page-header">All Notes</h2>
            <table id="task-table" className="table table-striped">
            <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Time</th>
                <th>Author</th>
                <th>Status</th>
            </tr>
            </thead>
            </table>
            <Button variant="*">Clear All</Button>
        </div>
    )
}
