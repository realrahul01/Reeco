import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mock: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state,action)=>{
            state.mock = action.payload
        },
        changeStatus: (state,action)=>{
            if(state.mock[action.payload].Status == false){
                state.mock[action.payload].Status = true
                state.mock[action.payload].Missing = false
            }    
        },
        closeStatus: (state,action)=>{
            if(state.mock[action.payload].Missing == false){
                state.mock[action.payload].Missing = true
                state.mock[action.payload].Status = false
                state.mock[action.payload].UrgentMissing = false 
                state.mock[action.payload].QuantityUpdated = false
                state.mock[action.payload].PriceUpdated = false   
            }
        },
        missingUrgent: (state,action)=>{
            if(state.mock[action.payload].UrgentMissing == false){
                state.mock[action.payload].UrgentMissing = true
                state.mock[action.payload].Missing = false
                state.mock[action.payload].QuantityUpdated = false
                state.mock[action.payload].PriceUpdated = false
            }
        },
        quantityStatus: (state,action)=>{
            if(state.mock[action.payload].QuantityUpdated == false){
                state.mock[action.payload].QuantityUpdated = true
                state.mock[action.payload].PriceUpdated = false
                state.mock[action.payload].UrgentMissing = false
                state.mock[action.payload].Missing = false
            }
        },
        priceUpdated: (state,action)=>{
            if(state.mock[action.payload].PriceUpdated == false){
                state.mock[action.payload].PriceUpdated = true
                state.mock[action.payload].QuantityUpdated = false
                state.mock[action.payload].UrgentMissing = false
                state.mock[action.payload].Missing = false
            }
        },
       increment: (state,action)=>{
        state.mock = state.mock.map((x)=>{
            if(x.Id === action.payload){
                return {...x, Quantity: x.Quantity + 1}
            }
            return x
        })
       },
       decrement: (state,action)=>{
        state.mock = state.mock.map((x)=>{
            if(x.Id === action.payload){
                return {...x, Quantity: x.Quantity - 1}
            }
            return x
        })
       },
       approveStatus:(state,action)=>{
        if(state.mock[action.payload].isApproved == false){
            state.mock[action.payload].isApproved = true
        }
       }
    },
});

export const {addCart,changeStatus,closeStatus,missingUrgent,increment,decrement,quantityStatus,priceUpdated,approveStatus} = cartSlice.actions;
export default cartSlice.reducer;