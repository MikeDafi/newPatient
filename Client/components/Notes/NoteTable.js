import React from 'react';
import PropTypes from 'prop-types';

const NoteTable = (props) => {
    const notes = props.notes;

    const noteRows = notes.map(note => {

        let classes = `small ${!!note.isNew ? 'table-success' : ''}`;
        
        return (
            <tr key={note.id.toString()} className={classes}>
                <td className="align-middle" style={{width: '80px'}}>
                    <div className="d-flex flex-row">
                        <a data-toggle="tooltip" data-placement="top" title="Edit Patient" className="p-2" onClick={() => props.onOpenEditNoteModal(note.id)}>
                            <i className="fa fa-edit fa-lg text-primary"></i>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Delete Patient" className="p-2" onClick={() => props.onDeleteNote(note.id)}>
                            <i className="fa fa-times-circle-o fa-lg text-danger"></i>
                        </a>
                    </div>                
                </td>
                <a href="#"><td className="align-middle">{note.title}</td></a>

                {note.title=== "Eric Robinsinstinson" ? (
                    <td className="align-middle text-success">
                    <span className="d-inline-block text-truncate" style={{maxWidth: '200px'}}>
                    <div className="align-middle text-danger">{note.content}</div>
                    </span>                
                </td>
                ) : null}

{note.title!== "Eric Robinsinstinson" ? (
                    <td className="align-middle text-success">
                    <span className="d-inline-block text-truncate" style={{maxWidth: '200px'}}>
                    <div className="align-middle text-success">{note.content}</div>
                    </span>                
                </td>
                ) : null}
                {/* <td className="align-middle text-success">
                    <span className="d-inline-block text-truncate" style={{maxWidth: '200px'}}>
                    <a href="#" className="align-middle text-success">{note.content}</a>
                    </span>                
                </td> */}
                <td className="align-middle">{`${new Date(note.updatedDate).toISOString().slice(0, 10)} ${new Date(note.updatedDate).toISOString().slice(11, 16)}`}</td>
            </tr>
        );
    });

    return (
        <div>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th className="align-middle text-center">Name</th>
                        <th className="align-middle text-center">Forms</th>
                        <th className="align-middle text-center">Updated Date</th>
                    </tr>
                </thead>
                <tbody>
                    {noteRows}
                </tbody>
            </table>
        </div>
    );
};

NoteTable.propTypes = {
    notes: PropTypes.array,
    onDeleteNote: PropTypes.func,
    onOpenEditNoteModal: PropTypes.func
};

export default NoteTable;