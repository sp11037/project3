import ToDoItem from "./ToDoItem";

const ToDoContainer = ({items}) => {
    const itemList = items.map(item =>
        <ToDoItem description={item.description} completed={item.completed} />
    );

    return (
        <div>
            {itemList}
        </div>
    );
};

export default ToDoContainer;