import React, { useState } from 'react'
import { createNote } from '../Services/Api'
import '../Styles/form.css'

export const NoteForm = ({refreshNotes}) => {
  const [noteform,setnoteform] = useState({
    title:"" , content:"" ,category:""
  })

  const handlesubmit = async(e) => {
    e.preventDefault();
    try{
      await createNote(noteform);
      setnoteform({title:'',content:'',category:''})
      refreshNotes();
    }
    catch(err){
      alert("Failed to add notes");
    }
  }
  return (
    <>
      <form className="note-form-container" onSubmit={handlesubmit}>
        <input
          type='text'
          placeholder='Title'
          value={noteform.title}
          onChange={(e)=>setnoteform({...noteform, title: e.target.value})}
        />
        <textarea
         placeholder='Write Your Content here'
         value={noteform.content}
         onChange={(e) => setnoteform({...noteform,content: e.target.value})}
        />
        <input
          type='text'
          placeholder='category'
          value={noteform.category}
          onChange={(e) => setnoteform({...noteform,category:e.target.value})}
        />
        <button type='submit'>Add Note</button>
      </form>
    </>
  )
}
