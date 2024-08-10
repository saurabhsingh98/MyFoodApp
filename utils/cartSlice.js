import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:'Cart',
    
    initialState:{
        items:[]
    },

    reducers:{
        additem: (state, action)=>{

            //Vanilla(older) redex: Dont Mutate the state && return compulsory
                //const newstate= [...state]
                //newstate.items.push(action.payload)
                //return newstate
            
            //Now: Redux-Tookkit : We have to Mutate the State &  no return
            //behind the Scene: Redux is working same : with help of IMMER library    

            state.items.push(action.payload);
        },

        removeitem:(state)=>{
            state.items.pop();
        },

        clearCart: (state)=>{

            //if state={items:[]}  // this will not work as state is local state here not changing actual state

            //RTK says: u have to either mutate the state or return new state

            state.items.length=0;
      
            //also correct:  return {items: []};
        }
    }
})


export const{additem,removeitem,clearCart}= cartSlice.actions;

export default cartSlice.reducer;