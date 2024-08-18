import React, {useState} from 'react';
function NotesPage(){
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');

    const addNote = () => {
        if (note.trim() === '') return;

        const newNote ={
            id: Date.now(),
            text: note,
        };

        setNotes([...notes, newNote]);
        setNote('');
    };
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id  !== id));
    };
    return(
        <div className="notes-page">
            <h2>Notes</h2>
        <div className="note-input">
            <textarea 
            value={note}
            onChange={(e)=> setNote(e.target.value)}
            placeholder="Write your note here..."
            />
        <button onclick={addNote}>Add Note</button>
        </div>
        <div className="notes-list">
            {notes.map(note => (
                <div key={note.id} className="note-item">
                    <p>{note.text}</p>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>
            ))}
        </div>
              </div>
    );
}

export default NotesPage;