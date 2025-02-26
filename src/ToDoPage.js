import { useState, createRef } from 'react';
import Filter from './Filter';
import ToDoItem from './ToDoItem';
import AddButton from './AddButton';

const ToDoPage = () => {
    const [filter, setFilter] = useState('all');
    const [items, setItems] = useState([
        {id: 100, description: "first item", completed: "no"},
        {id: 101, description: "second item", completed: "yes"},
    ]);

    const newItemRef = createRef();

    // TODO: after making a functional to do list, let the user sort the items by completion
    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    // Modal Controls
    const displayAddModal = (status) => {
        const overlay = document.querySelector(".overlay");
        const modal = document.querySelector(".modal");

        if (status === "open") {
            overlay.style.display = "block";
            modal.style.display = "block";
        } else {
            overlay.style.display = "none";
            modal.style.display = "none";
        }
    };

    window.onclick = (e) => {
        const overlay = document.querySelector(".overlay");

        if(e.target === overlay) {
            displayAddModal("close");
        }
    };

    // append new to do item to item list
    const handleAdd = (e) => {
        e.preventDefault();

        const newItemValue = newItemRef.current.value;
        if (newItemValue === "") {
            return;
        }

        const newList = [...items, {id: items[items.length - 1].id + 1, description: newItemValue, completed: "no"}];
        newItemRef.current.value = "";
        displayAddModal("close");
        setItems(newList);
    };

    const handleDelete = (deleteId) => {
        const newList = items.filter(item => item.id !== deleteId);
        setItems(newList);
    };

    // display to do items on screen
    const itemList = items.map(item =>
        <ToDoItem id={item.id} description={item.description} completed={item.completed} handleDelete={handleDelete} />
    );

    return (
        <>
            <Filter changeFilter={changeFilter} />
            {itemList}
            <AddButton displayAddModal={displayAddModal} newItemRef={newItemRef} handleAdd={handleAdd} />
        </>
    );
};

export default ToDoPage;