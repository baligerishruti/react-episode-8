import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [loginButtonName, setLoginButtonName] = useState("Login");
    // no dependency array, useEffect runs after every render
    // if dependency array is empty, useEffect runs only once after the first render (componentDidMount)
    useEffect(() => {
        console.log('useEffect called');
    }, []);
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={() => {
                        let newBtnName = loginButtonName === "Login" ? "Logout" : "Login";
                        setLoginButtonName(newBtnName);
                         }}>
                        {loginButtonName}
                    </button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;