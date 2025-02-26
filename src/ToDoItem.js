const ToDoItem = ({description, completed}) => {
    return (
        <div>{description} {completed}</div>
    );
};

export default ToDoItem;