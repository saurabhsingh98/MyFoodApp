import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";

import { additem } from "../../utils/cartSlice";

const ThatVarietyMenu=({item})=>{

    const dispatch= useDispatch();

    const handleclick=(item)=>{
        dispatch( additem(item) )
    }
    console.log(item)
    const {name,imageId, description ,defaultPrice, price}= item.card.info;
    return (
        <div className="flex m-2 justify-between border-b border-white">
            <div className="justify-between p-2 m-2 text-left">
                <div className="font-bold text-sm">{name} - ₹{ price? price/100 : defaultPrice/100} </div>   
                <p className="text-xs">{description}</p>

           
            </div>

            <div>

            <button className="bg-green-600  text-white p-1 m-2 rounded-md absolute" onClick={()=>{handleclick(item)}} >Add+</button>
            <img className="w-28 h-24" src={CDN_URL+imageId} alt="item" />
            </div>
        </div>
      
    );
}

export default ThatVarietyMenu;