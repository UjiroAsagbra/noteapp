import { React } from "react";
import "./Components/css/App.css";
import NoteTitle from "./Components/NoteComponents/NoteTitle";
import Notes from "./Components/NoteComponents/Notes";
function App() {

  return (
    <div className="main">
      
      <NoteTitle/>
      <Notes/>
      
    </div>
  )
}

export default App
