import {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./menuShimmer";

import { MENU_API_URL1 ,MENU_API_URL2} from "../../utils/constants";
import useRestaurentmenu from "../../utils/useRestaurentmenu";
import MenuVariety from "./MenuVariety";


const RestrauMenu =()=>{

   const [indextoshow, setindextoshow]= useState(null);

    const {resID}= useParams();

    const [menuList, setmenuList]= useState([]);
    const [HotelName, setHotelName]= useState("HotelName");
    
    useEffect(()=>{
            fetchmenu();
    },[])

    const fetchmenu= async ()=>{

            // const data= await fetch(MENU_API_URL1 +resID +"catalog_qa=undefined&submitAction=ENTER");
            const data= await fetch(MENU_API_URL1+resID+MENU_API_URL2);
            const json= await data.json();

            const a= json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            setmenuList(a.filter( item=> item.card["card"]['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ))
            
            //console.log(menuList)
            //  setmenuList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
              setHotelName(json?.data?.cards[2].card.card.info.name);
    }

    return (menuList.length===0)?<MenuShimmer/>: (  

        <div className="text-center"> 
            <h2 className="text-2xl font-bold">{HotelName}</h2>
            <h3 className="text-xl font-bold">Menu</h3>
            { menuList.map( (variety,index)=>   index===indextoshow ?(  <MenuVariety  data={variety} showi={true} setindextoshow={()=> setindextoshow(null)} />): (<MenuVariety  data={variety} showi={false} setindextoshow={()=> setindextoshow(index)}/>) )}
        </div>   
    );
}


export default RestrauMenu;