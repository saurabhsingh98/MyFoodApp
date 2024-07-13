
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";


const Header= () => {

        const [btnValue, setbtnValue]= useState("login");

        console.log("header rendered");

    return (
            <div  className="Header">
                    <div className="logo-img"> 
                    <img src={LOGO_URL} alt="logo" /> </div>
                    <div className="nav-items">
                            <ul>
                                <li>
                                         <Link to="/">HOME</Link> 
                                </li>
                                <li>
                                        {/* <a href="/about">About</a>               Dont Use this, ye pure path ko follow krke load krega, but LINK will use react */}
                                        <Link to="/about">About</Link> 
                                </li>
                                <li>
                                        <Link to="/contact">Contact</Link>
                                </li>
                               
                                <li>Cart </li>
                                <button onClick={()=> {
                                        const a= (btnValue=="login")?"logout":"login";
                                        setbtnValue(a);
                                }}>{btnValue}</button>
                            </ul>
                    </div>
            </div>
    );
}

export default Header;