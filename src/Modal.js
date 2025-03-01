import "./Modal.css";

const Modal = ({handleAdd, addRef, handleEdit, editRef}) => {

    return (
        <>
            <div className="overlay"></div>
            <div className="addModal modal">
                <form action="#" onSubmit={handleAdd}>
                    <label>
                        New To Do Item:
                        <input type="text" name="newItem" ref={addRef} required />
                    </label>
                    <button type="submit" className="submitNewItem">Add</button>
                </form>
            </div>
            <div className="editModal modal">
                <form action="#" onSubmit={handleEdit}>
                    <label>
                        Edit To Do Item:
                        <input type="text" name="editItem" ref={editRef} required />
                    </label>
                    <button type="submit" className="">Edit</button>
                </form>
            </div>
        </>
    );
};

export default Modal;