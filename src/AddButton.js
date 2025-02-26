import React from 'react';
import "./AddButton.css";

const AddButton = ({displayAddModal, newItemRef, handleAdd}) => {
    return (
        <div>
            <button onClick={() => displayAddModal("open")}>Add</button>
            <div className="overlay"></div>
            <div className="modal">
                <form action="#" onSubmit={handleAdd}>
                    <label>
                        New To Do Item:
                        <input type="text" name="newItem" ref={newItemRef} required />
                    </label>
                    <button type="submit" className="submitNewItem">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddButton;