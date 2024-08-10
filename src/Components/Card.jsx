import { useContext } from "react";
import UserContext from "../../utils/UserContext";


const Card= ({appu})=> {                // appu is object and Card function recives object , so its object of object , ({appu}): for destraucting

  const contextdata= useContext(UserContext);

        const {name, id, cloudinaryImageId, costForTwo, cuisines, avgRating}= appu.info;

        let url="https://media-assets.swiggy.com/swiggy/image/upload/";
        url= url+ cloudinaryImageId;    
        
       
        return (

                <div class="w-60 h-[400px] p-1 my-2 mx-2 rounded overflow-hidden shadow-lg bg-slate-200">
                    <img class="w-full h-56" src={url} alt="Sunset in the mountains"/>
                    <div class="px-1 py-1">
                        <div class="font-bold text-lg">{name}</div>
                    </div>
                    <div class="">
                          <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">{costForTwo}</span>
                          <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">{cuisines+""}</span>
                          <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">{avgRating}</span>
                    </div>
                    <div>{contextdata.loggedInUser}</div>
                </div>

        );}

export const withLabelCard= (Card)=>{

  return (props)=>{
      return (
          <div>
            <div className="absolute bg-black text-white p-1 rounded-md">Promoted</div>
            <Card {...props} />
          </div>
      );
  }
}


export default Card;