import { useState, createRef } from 'react';
import Filter from './Filter';
import ToDoItem from './ToDoItem';
import Modal from './Modal';

const ToDoPage = () => {
    const [filter, setFilter] = useState('All');
    const [items, setItems] = useState([
        {id: 100, description: "first item", completed: "Incomplete"},
        {id: 101, description: "second item", completed: "Completed"},
    ]);

    const newItemRef = createRef();
    const editItemRef = createRef();

    let editId = 0;

    // TODO: after making a functional to do list, let the user sort the items by completion
    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    const displayModal = (content, status, id) => {
        const overlay = document.querySelector(".overlay");
        const modal = document.querySelector("." + content + "Modal");

        if(id) {
            editId = id;
        }

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
            displayModal(
                document.querySelector(".addModal").style.display === "block" ? "add" : "edit" ,
                "close"
            );
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
        displayModal("add", "close");
        setItems(newList);
    };

    const handleDelete = (deleteId) => {
        const newList = items.filter(item => item.id !== deleteId);
        setItems(newList);
    };

    const handleEdit = (e) => {
        e.preventDefault();

        const itemIndex = items.findIndex(item => item.id === editId);
        items[itemIndex].description = editItemRef.current.value;
        editItemRef.current.value = "";
        displayModal("edit", "close");
        setItems([...items]);
    };

    const handleComplete = (id) => {
        const itemIndex = items.findIndex(item => item.id === id);

        if (items[itemIndex].completed === "Completed") {
            items[itemIndex].completed = "Incomplete";
        } else {
            items[itemIndex].completed = "Completed";
        }

        setItems([...items]);
    }

    // display to do items on screen
    const itemList = items
        .filter(item => item.completed === filter || filter === "All")
        .map(item => <ToDoItem id={item.id} description={item.description} completed={item.completed} displayModal={displayModal} handleComplete={handleComplete} handleDelete={handleDelete} />);

    return (
        <>
            <Filter changeFilter={changeFilter} />
            {itemList}
            <button onClick={() => displayModal("add", "open")}>Add</button>
            <Modal handleAdd={handleAdd} addRef={newItemRef} handleEdit={handleEdit} editRef={editItemRef} />
        </>
    );
};

export default ToDoPage;