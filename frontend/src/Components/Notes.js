import React, { useEffect, useState } from 'react'
import { deleteNote, fetchNote } from '../Services/Api';
import {NoteForm} from './NoteForm.js'
import '../Styles/notes.css'

export const Notes = () => {
  const[notes,setNotes] = useState([]);

  const getnotes = async() =>{
    try{
      const {data} = await fetchNote();
      setNotes (data);
    }
    catch(err){
      alert("Failed to fetch notes");
    }
  };
  const handleDelete = async(id) =>{
    try{
      await deleteNote(id);
      setNotes (notes.filter((note) => note._id !== id))
    }
    catch(err){
      alert("Failed to delete Note")
    }
  };

  useEffect(() =>{
    getnotes();
  },[])
  return (
    <>
      <div className="notes-container">
      <h2>Your Notes</h2>
      <NoteForm refreshNotes={getnotes} />
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note._id} className="note-item">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
            <p className="note-category">
              <i>{note.category}</i>
            </p>
            <button
              className="delete-button"
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
