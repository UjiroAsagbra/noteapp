import remove from "../images/delete.png"
import edit from "../images/edit.png"
const Note = ({ id, text, deleteNote, inputDate})=> {
  return (
    <div className="note">
      <div>{inputDate}</div>
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <img src={remove} className="note__delete" onClick={() => deleteNote(id)}/> 
      </div>
    </div>
  );
}
export default Note;