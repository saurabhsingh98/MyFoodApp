import Card from "./Card"
import {useEffect, useState} from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// import Restrau from "../../utils/restrauData";

const Body= () => {

        const [Restraulist, setRestraulist] = useState([]);
        const [originallist, setoriginallist]= useState([]);
        
        console.log("body rendered");
        
            const filterRestaurants = () => {
                const filteredlist = Restraulist.filter((rest) => rest.info.avgRating> 4);
                setRestraulist(filteredlist);
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
               
           //optional chaining : if at anypoint it returns undefine it all becomes undefined
           console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

           setoriginallist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

           setRestraulist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        
        }

        //searchbox
        const [searchText, setsearchText]= useState("");

    return (Restraulist.length===0)? <Shimmer/> : (     //rendering before the api call for better user experience
       
            <div className="body"> 
                    <div className="Sorting">
                    <   div className="Search-Bar">
                            < input type="text" value={searchText} onChange={(e)=>{ setsearchText(e.target.value) }}/>

                            <button onClick={ ()=>{   const FilteredRes=Restraulist.filter( (res)=> res.info.name.toLowerCase().includes( searchText.toLowerCase() )  ); setoriginallist(FilteredRes); }} > Button</button>
                        </div>
                 
                    <div className="filter">
                        <button className="filter-btn" onClick={filterRestaurants} > Top Rated Restaurants </button>
                    </div>
    
                    </div>
                   
                    <div className="res-container">

                           {   originallist.map( Restaur=> <Link to= {"/Restaurant/"+Restaur.info.id }> <Card key={Restaur.info.id} appu={Restaur} /> </Link> )  }

                    </div>

            </div>
    );
}

export default Body;