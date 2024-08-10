
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import useInternetStatus from "../../utils/useInternetStatus";

import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header= () => {

        //subscribing to store using selector
        const cartItems= useSelector((store)=> store.cart.items);
        console.log(cartItems)

        const {loggedInUser}= useContext(UserContext);

        const [btnValue, setbtnValue]= useState("login");

         const status=useInternetStatus();
          console.log(status);
        let check="🚀"
        if(status==false){
                check="🔴"
        }
        else{
                check="🟢"
        }

        console.log("header rendered");

    return (
            <div  className="flex m-2 shadow-xl justify-between px-4 bg-pink-200">
                    <div className=""> 
                        <Link to="/"><img className="w-24 rounded-xl p-2" src={LOGO_URL} alt="logo" />        </Link>
                    </div>

                    <div className="items-center m-4 ">
                            <ul className="flex ">
                                <li  className="m-2 p-1">Internet Status:{check}</li>
                                <li className="m-2 p-1">
                                         <Link to="/">HOME</Link> 
                                </li>
                                <li className="m-2 p-1">
                                        <Link to="/grocery">Grocery</Link>
                                </li>
                                <li className="m-2 p-1">
                                        {/* <a href="/about">About</a>               Dont Use this, ye pure path ko follow krke load krega, but LINK will use react */}
                                        <Link to="/about">About</Link> 
                                </li>
                                <li className="m-2 p-1">
                                        <Link to="/contact">Contact</Link> </li>
                             
                                <li className="m-2 p-1 font-semibold">
                                      <Link to={"/cart"}> Cart :{cartItems.length}  </Link>  </li>

                                <li className="m-2 p-1 uppercase font-semibold">
                                      {loggedInUser}
                                </li>
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