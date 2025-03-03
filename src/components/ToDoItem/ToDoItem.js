import "./ToDoItem.css";

const ToDoItem = ({id, description, completed, displayModal, handleComplete, handleDelete}) => {
    return (
        <div className="toDoItem">
            <div className={"toDoContent " + completed} onClick={() => handleComplete(id)}>{description}</div>
            <button className="editButton itemButton" onClick={() => displayModal("edit", "open", id)}>&#9998;</button>
            <button className="deleteButton itemButton" onClick={() => handleDelete(id)}>&#10005;</button>
        </div>
    );
};

export default ToDoItem;