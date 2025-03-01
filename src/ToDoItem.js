const ToDoItem = ({id, description, completed, displayModal, handleDelete}) => {
    return (
        <div>{description} {completed}
            <button className="editButton" onClick={() => displayModal("edit", "open", id)}>Edit</button>
            <button className="deleteButton" onClick={() => handleDelete(id)}>X</button>
        </div>
    );
};

export default ToDoItem;