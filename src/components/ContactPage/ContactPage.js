import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formUpdate, setFormUpdate] = useState("");
    const [contactData, setContactData] = useState([]);

    const handleFormUpdate = () => {
        const output = document.querySelector(".updateTimestamp");

        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        setFormUpdate(`${hours}:${minutes}:${seconds}`);
        output.style.display = "block";
    }

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const newContact = {fName: e.target.fName.value, lName: e.target.lName.value, eMail: e.target.eMail.value, comments: e.target.comments.value};
        setContactData([...contactData, newContact]);
        window.location.reload();
    }

    return (
        <form action="#" className="contactForm" onChange={handleFormUpdate} onSubmit={handleContactSubmit}>
            <h1>Contact Form</h1>
            <label>First Name:
                <input type="text" name="fName" autoComplete="off" />
            </label>
            <label>Last Name:
                <input type="text" name="lName" autoComplete="off" />
            </label>
            <label>Email:
                <input type="email" name="eMail" autoComplete="off" />
            </label>
            <label>Comments:
                <textarea name="comments" />
            </label>
            <button type="submit">Submit</button>
            <p className="updateTimestamp">Input Updated: {formUpdate}</p>
        </form>
    );
};

export default ContactPage;