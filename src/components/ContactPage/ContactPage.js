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

        const fName = document.querySelector(".fName");
        const lName = document.querySelector(".lName");
        const eMail = document.querySelector(".eMail");
        const comments = document.querySelector(".comments");
        const output = document.querySelector(".updateTimestamp");

        const newContact = {fName: fName.value, lName: lName.value, eMail: eMail.value, comments: comments.value};
        setContactData([...contactData, newContact]);

        fName.value = "";
        lName.value = "";
        eMail.value = "";
        comments.value = "";
        output.style.display = "none";
    }

    return (
        <form action="#" className="contactForm" onChange={handleFormUpdate} onSubmit={handleContactSubmit}>
            <h1>Contact Form</h1>
            <label>First Name:
                <input type="text" className="fName" name="fName" autoComplete="off" />
            </label>
            <label>Last Name:
                <input type="text" className="lName" name="lName" autoComplete="off" />
            </label>
            <label>Email:
                <input type="email" className="eMail" name="eMail" autoComplete="off" />
            </label>
            <label>Comments:
                <textarea className="comments" name="comments" />
            </label>
            <button type="submit">Submit</button>
            <p className="updateTimestamp">Input Updated: {formUpdate}</p>
        </form>
    );
};

export default ContactPage;