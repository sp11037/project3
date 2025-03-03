import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">To Do</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;