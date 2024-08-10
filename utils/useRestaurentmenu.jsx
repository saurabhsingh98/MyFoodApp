import { useState ,useEffect} from "react";
import { MENU_API_URL1 } from "./constants";

const useRestaurentmenu = (resID)=>{

    const [menuList, setmenuList]=useState(null);

    useEffect(()=>{
        // console.log("useEffect called")
        menuCall();
    },[])
    
    const menuCall= async ()=>{
        const data= await fetch(MENU_API_URL1+resID+"&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();

        setmenuList(json.data);

       // console.log(menuList);
        //.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        // setHotelName(json.data.cards[2].card.card.info.name);

    
    }


}


export default useRestaurentmenu;