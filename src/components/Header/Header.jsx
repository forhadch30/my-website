import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <span><h2>My website</h2></span>
           <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/conact">Conact Us</NavLink>
            <NavLink to="/users">Users</NavLink>
           </nav>
        </div>
    );
};

export default Header;