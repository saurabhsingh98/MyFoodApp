import { useEffect, useState } from "react";
import { MYGIT_API } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Contact= ()=> {

    const [data, setdata]=useState(null);

    // useEffect (()=>{
       // apidatafetching();
    // },[])

    // const apidatafetching= async ()=>{

        // const data= await fetch(MYGIT_API);
        // const json= await data.json();

        // console.log(json);

        // setdata(json);

    // }

    // return (data===null)?<Shimmer/>:(

        return ( 
        <div className="contact">

            {/* <img src={data.avatar_url} alt="Profile Photo" />

            <h1>Name: {data.name}</h1>
            <h2>Bio:{data.bio} </h2>
            <h2>Location:{data.location}</h2> */}

            <div className="m-4 text-center">
                <h1 className="text-center font-semibold m-2 text-xl">Contact Us</h1>
                <input className="m-2 bg-slate-200 border border-black p-2 rounded-md" type="text" placeholder="name"/>
                <input className="m-2 bg-slate-200 border border-black p-2 rounded-md" type="text" placeholder="message"/>
                <button className="m-2 bg-slate-200 border border-black p-2 rounded-md" >Submit</button>
            </div>

        </div>
    );
}

export default Contact;