
const User= ({name, location})=>{
    
    return (
        <div className="contact-person" >
            <h1>{name}</h1>
            <h5>{location}</h5>
        </div>
    );
}


export default User;