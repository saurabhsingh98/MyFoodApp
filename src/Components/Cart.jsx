import { useDispatch, useSelector } from "react-redux";
import ThatVarietyMenu from "./ThatVarietyMenu";
import { clearCart } from "../../utils/cartSlice";

const Cart = ()=>{

    const cartitems= useSelector((store)=> store.cart.items );

    console.log("cart rendered")
    console.log(cartitems);

    const dispatch= useDispatch();

    const handleClick=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center w-6/12 m-auto">
            <div className="m-6 p-2 font-bold text-xl bg-green-100 rounded-md">Cart Items</div>
            <button className="bg-black text-white rounded-md p-1" onClick={()=>{handleClick()}}>Clear Cart</button>
            { cartitems.length===0?(<div>No Items </div>) : ( cartitems.map(item=> <ThatVarietyMenu item={item}/>) ) }
        </div>
    );
}

export default Cart;