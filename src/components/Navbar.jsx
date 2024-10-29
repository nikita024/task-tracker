import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("loggedIn");
        setUsername("");
        navigate("/login");
    };

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (username) {
            setUsername(username);
        }
    }, []);

    return (
        <div className="navbar">
        <div className="navbar-logo">Bug Tracker</div>
        <div className="navbar-right">
            <span className="navbar-username">Hello, {username}</span>
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
        </div>
    );
};

export default Navbar;

