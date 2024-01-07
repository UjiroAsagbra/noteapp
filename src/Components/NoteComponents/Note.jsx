import remove from "../images/delete.png"
import edit from "../images/edit.png"
const Note = ({ id, text, handleDelete, inputDate, handleEdit})=> {
  return (
    <div className="note">
      <div>{inputDate}</div>
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
      <img src={edit} className="note__edit" onClick={() => handleEdit(id,text)}/>
        <img src={remove} className="note__delete" onClick={() => handleDelete(id)}/> 
      </div>
    </div>
  );
}
export default Note;