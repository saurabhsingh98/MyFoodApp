
const Card= ({appu})=> {                // appu is object and Card function recives object , so its object of object , ({appu}): for destraucting


        const {name, id, cloudinaryImageId, costForTwo, cuisines, avgRating}= appu.info;

        let url="https://media-assets.swiggy.com/swiggy/image/upload/";
        url= url+ cloudinaryImageId;    
        
       
        return (
                <div className="card">

                        <img src={url}  alt="Restaurant-Photo" />
                        
                         <h3> {name} </h3>
                        <h5>{costForTwo}</h5>
                       
                        <h6>{cuisines+""}</h6>

                        <h4>Avg. Rating:{avgRating}</h4>
                </div>
        );
}


export default Card;