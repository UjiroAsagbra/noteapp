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

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  
  const saveHandler = () => {
    if(!inputText) { alert("Cant save blanks"); return; }
    setNotes((prevState) =>[
      {
        id: uuid(),
        text: inputText,
      },   ...prevState,
    ]);
    //clear the textarea
    setInputText("");
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
       <NewNote  
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}/>

      {notes.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        inputDate={inputDate}
        deleteNote={deleteNote}
      />
    ))}
     
    </div>
  );
}

export default Notes;