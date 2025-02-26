const ToDoItem = ({id, description, completed, handleDelete}) => {
    return (
        <div>{description} {completed}
            <button className="deleteButton" onClick={() => handleDelete(id)}>X</button>
        </div>
    );
};

export default ToDoItem;