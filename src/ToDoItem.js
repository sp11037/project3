import "./ToDoItem.css";

const ToDoItem = ({id, description, completed, displayModal, handleComplete, handleDelete}) => {
    return (
        <>
            <div className="toDoItem" onClick={() => handleComplete(id)}>{description} {completed}</div>
            <button className="editButton" onClick={() => displayModal("edit", "open", id)}>Edit</button>
            <button className="deleteButton" onClick={() => handleDelete(id)}>X</button>
        </>
    );
};

export default ToDoItem;