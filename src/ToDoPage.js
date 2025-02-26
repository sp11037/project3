import { useState, createRef } from 'react';
import Filter from './Filter';
import ToDoItem from './ToDoItem';
import AddButton from './AddButton';

const ToDoPage = () => {
    const [filter, setFilter] = useState('all');
    const [items, setItems] = useState([
        {description: "first item", completed: "no"},
        {description: "second item", completed: "yes"},
    ]);

    const newItemRef = createRef();

    // TODO: after making a functional to do list, let the user sort the items by completion
    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    // display to do items on screen
    const itemList = items.map(item =>
        <ToDoItem description={item.description} completed={item.completed} />
    );

    // Modal Controls
    const displayAddModal = (status) => {
        const overlay = document.querySelector(".overlay");
        const modal = document.querySelector(".modal");

        if (status == "open") {
            overlay.style.display = "block";
            modal.style.display = "block";
        } else {
            overlay.style.display = "none";
            modal.style.display = "none";
        }
    };

    window.onclick = (e) => {
        const overlay = document.querySelector(".overlay");

        if(e.target == overlay) {
            displayAddModal("close");
        }
    };

    // append new to do item to item list
    const handleAdd = (e) => {
        e.preventDefault();

        const newItemValue = newItemRef.current.value;
        if (newItemValue == "") {
            return;
        }

        const newList = [...items, {description: newItemValue, completed: "no"}];
        newItemRef.current.value = "";
        displayAddModal("close");
        setItems(newList);
    };

    return (
        <>
            <Filter changeFilter={changeFilter} />
            {itemList}
            <AddButton displayAddModal={displayAddModal} newItemRef={newItemRef} handleAdd={handleAdd} />
        </>
    );
};

export default ToDoPage;