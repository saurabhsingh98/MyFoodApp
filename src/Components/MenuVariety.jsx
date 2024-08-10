
import { useEffect, useState } from "react";
import ThatVarietyMenu from "./ThatVarietyMenu";

const MenuVariety =({data, showi, setindextoshow})=>{

   const [items, setitems]= useState([]);

    // console.log("menu varity");
    // console.log(data);

    //const [show, setshow]= useState(false);

    useEffect(()=>{
        setitems(data.card.card.itemCards);
        // console.log(items )
    },[])

   

    return (items.length===0)? <div></div> :(
        <div className="w-6/12 bg-gray-200 mx-auto my-2 rounded-lg">
            <div className="cursor-pointer varietyheaders flex m-2 p-2 justify-between border-b border-gray-400" onClick={()=>{  setindextoshow(); }}>
                <div className="font-bold text-xl">{data.card.card.title} </div>
                <div>▿</div>
            </div>

            <div>
    { !showi ? (
        <div></div>
    ) : (
        <div>
            { items.map(thisitem => <ThatVarietyMenu key={thisitem.id} item={thisitem} />) }
        </div>
    )}
</div>

        </div>
    );
}

export default MenuVariety;