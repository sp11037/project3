import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const [openBars, setOpenBars] = useState(false);

    const openMenu = () => {
        if (openBars) {
            document.querySelector(".verticalMenu").style.display = "none";
            setOpenBars(false);
        } else {
            document.querySelector(".verticalMenu").style.display = "block";
            setOpenBars(true);
        }
    }

    return (
        <>
            <nav>
                <button className="barMenuButton" onClick={openMenu}>&#9776;</button>
                <ul className="horizontalMenu">
                    <li><Link to="/">To Do</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="verticalMenu">
                    <li><Link to="/">To Do</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;