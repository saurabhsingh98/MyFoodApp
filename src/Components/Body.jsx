import Card,{withLabelCard} from "./Card"
import {useContext, useEffect, useState} from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import UserContext from "../../utils/UserContext";
// import Restrau from "../../utils/restrauData";

const Body= () => {

        const {setUserName}=useContext(UserContext);

        const CardPromoted= withLabelCard(Card); 

        const [Restraulist, setRestraulist] = useState([]);
        const [originallist, setoriginallist]= useState([]);
        
        console.log("body rendered");
        
            const filterRestaurants = () => {
                const filteredlist = Restraulist.filter((rest) => rest.info.avgRating>= 4.5);
                setRestraulist(filteredlist);
                setoriginallist(filteredlist)
            };

        // useEffect(()=>{
        //     console.log("Inside useEffect");
        // }, [])

        // console.log("Body Rendered");        //but this will print first as useEffect renders at last


        useEffect(()=>{
             fetchData();
        },[]);

        const fetchData= async()=>{
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4969&lng=80.3246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json= await data.json()
               
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

           //optional chaining : ?.  if at anypoint it returns undefine it all becomes undefined
          
            //api changed

            setoriginallist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestraulist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        
        }

        //searchbox
        const [searchText, setsearchText]= useState("");

    return (Restraulist.length===0)? <Shimmer/> : (     //rendering before the api call for better user experience
       
            <div > 

                    <div className="flex m-2">
                        {/* SearchingRestaurant */}
                        <div>
                            < input className="bg-slate-200 border border-gray-400 px-2 mx-2 rounded-md" type="text" value={searchText} onChange={(e)=>{ setsearchText(e.target.value) }}/>

                            <button className="bg-green-300 rounded-md p-1 m-1" onClick={ ()=>{   const FilteredRes=Restraulist.filter( (res)=> res.info.name.toLowerCase().includes( searchText.toLowerCase() )  ); setoriginallist(FilteredRes); }} > Search</button>
                        </div>

                        {/* sorting restaurants */}
                        <div className="filter">
                            <button className="bg-green-300 rounded-md  p-1 m-1" onClick={ ()=>{ filterRestaurants(); } } > Top Rated Restaurants </button>
                        </div>

                        {/* Changing Username withInputBox */}
                        <div>
                            <label className="ml-2 py-2" htmlFor="d">UserName:</label>
                            <input className="m-2  bg-slate-200 border rounded-md border-gray-400" type="text" onChange={(e)=>{ setUserName(e.target.value) }}/>
                        </div>
    
                    </div>

                    {/* Cards section of Body */}
                   
                    <div className="flex flex-wrap my-2 justify-center mx-2">

                           {  originallist.map( Restaur=> <Link key={Restaur.info.id} to= {"/Restaurant/"+Restaur.info.id }>
                                    
                                    {Restaur.info.avgRating>=4.5 ? <CardPromoted appu={Restaur}/>:
                                    <Card key={Restaur.info.id} appu={Restaur} /> 
                                    }
                            
                             </Link> )  } 

                    </div>

            </div>
    );
}

export default Body;