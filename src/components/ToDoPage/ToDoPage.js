import { useState, createRef } from 'react';
import Filter from '../Filter/Filter';
import ToDoItem from '../ToDoItem/ToDoItem';
import Modal from '../Modal/Modal';
import './ToDoPage.css';

const ToDoPage = () => {
    const [filter, setFilter] = useState('All');
    const [items, setItems] = useState([
        {id: 100, description: "buy more cheese", completed: "Incomplete"},
        {id: 101, description: "go to the hospital", completed: "Completed"},
    ]);

    // references for modal input
    const addRef = createRef();
    const editRef = createRef();

    // holds the id for the current item being editted
    let editId = 0;

    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    // modal controls
    const displayModal = (content, status, id) => {
        const overlay = document.querySelector(".overlay");
        const modal = document.querySelector("." + content + "Modal");

        // for editting an existing item
        if (id) {
            editId = id;
            const itemIndex = items.findIndex(item => item.id === editId);
            editRef.current.value = items[itemIndex].description;
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

        // if the user clicks outside the modal
        if(e.target === overlay) {
            displayModal(
                document.querySelector(".addModal").style.display === "block" ? "add" : "edit" ,
                "close"
            );
            addRef.current.value = "";
        }
    };

    // item interaction functions
    const handleAdd = (e) => {
        e.preventDefault();

        const newId = items[items.length - 1].id + 1;
        const newItemValue = addRef.current.value;

        const newList = [...items, {id: newId, description: newItemValue, completed: "Incomplete"}];
        setItems(newList);

        addRef.current.value = "";
        displayModal("add", "close");
    };

    const handleDelete = (deleteId) => {
        const newList = items.filter(item => item.id !== deleteId);
        setItems(newList);
    };

    const handleEdit = (e) => {
        e.preventDefault();

        const itemIndex = items.findIndex(item => item.id === editId);
        items[itemIndex].description = editRef.current.value;
        setItems([...items]);

        editRef.current.value = "";
        displayModal("edit", "close");
    };

    const handleComplete = (id) => {
        const itemIndex = items.findIndex(item => item.id === id);

        items[itemIndex].completed = items[itemIndex].completed === "Completed" ? "Incomplete" : "Completed";

        setItems([...items]);
    }

    // display items on screen
    const itemList = items
        .filter(item => item.completed === filter || filter === "All")
        .map(item => <ToDoItem id={item.id} description={item.description} completed={item.completed} displayModal={displayModal} handleComplete={handleComplete} handleDelete={handleDelete} />);

    return (
        <div className="toDoPageContent">
            <Filter changeFilter={changeFilter} />
            <div className="itemContainer">
                {itemList}
            </div>
            <button className="addButton" onClick={() => displayModal("add", "open")}>Add</button>
            <Modal handleAdd={handleAdd} addRef={addRef} handleEdit={handleEdit} editRef={editRef} />
        </div>
    );
};

export default ToDoPage;