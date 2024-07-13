import {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL1 } from "../../utils/constants";

const RestrauMenu =()=>{

    const {resID}= useParams();
    const [menuList, setmenuList]= useState([]);

    const [HotelName, setHotelName]= useState("HotelName");

    useEffect(()=>{
        console.log("useEffect called")
        menuCall();
    },[])
    
    const menuCall= async ()=>{
        const data= await fetch(MENU_API_URL1+resID+"&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();

        setmenuList(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        console.log(json);
        setHotelName(json.data.cards[2].card.card.info.name);

    }

    return (  
        <div className="Menu"> 
            <h2>{HotelName}</h2>
            <h3>Menu</h3>
            <ul>
                {
                    menuList.map(item=> <li key={item.card.info.id}>{item.card.info.name} Price:  ₹{item.card.info.price/100}</li> ) 
                }
            </ul>
        </div>   
    );
}


export default RestrauMenu;