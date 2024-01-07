import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../css/Note.css";
import Note from "./Note";
import NewNote from "./NewNote";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem('Notes')
    if(localValue==null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const [inputText, setInputText] = useState("");

  const [editToggle, setEditToggle] = useState(null)

  const editHandler = (id,text) => {
    setEditToggle(id)
    setInputText(text)
}

  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  
  const saveHandler = () => {
    if(!inputText) { alert("Can't save blanks"); return; }
    if(editToggle) {
      setNotes(notes.map((note) => (
          note.id === editToggle ?
          {...note, text: inputText}
          : note
      )))
  } else {
    setNotes((prevState) =>[
      {
        id: uuid(),
        text: inputText,
      },   ...prevState,
    ])};
    //clear the textarea
    setInputText("");
    setEditToggle(null)
  };

  const inputDate = new Date().toDateString()

  const deleteNote = (id) => {
    let text = "Are you sure you want to delete?";
    if (confirm(text) == true) {
      const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    }
    
  };

  return (
    <div className="notes">
       {
            editToggle === null ? 
            <NewNote  
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}/> : <></>
        }
       {
            notes.map((note) => (
                editToggle === note.id ?
       <NewNote  
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}/>
          :
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        inputDate={inputDate}
        editHandler = {editHandler}
        deleteNote={deleteNote}
      />
    ))}
     
    </div>
  );
}

export default Notes;