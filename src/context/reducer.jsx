export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist:[],
    cart:[],
    token: null,
    reload: false
}

export const reducer = (state, action)=> {
    let result = state
    switch(action.type){
        case "ADD_WISHLIST":
            let index = state.wishlist.findIndex(pro=> pro.id === action.payload.id)
            if(index < 0){
                result = {...state, wishlist: [...state.wishlist,action.payload]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }else{
                result = {...state, wishlist: state.wishlist.filter(pro=> pro.id !== action.payload.id)}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "ADD_CART":
            let indexItem = state.cart.findIndex(pro=> pro.id === action.payload.id)
            if(indexItem < 0){
                result = {...state, cart: [...state.cart, {...action.payload, amount:1}]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }else{
                result = {...state, cart: state.cart.map((pro, inx)=> (
                    indexItem === inx ? {...pro, amount: pro.amount + 1} : pro
                ))}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "DEC_CART":
            let decindex = state.cart.findIndex(pro=> pro.id === action.payload.id)
            result = {...state, cart: state.cart.map((pro, inx)=> (
                decindex === inx ? {...pro, amount: pro.amount - 1} : pro
            ))}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "REMOVE_CART":
            result= {...state, cart: state.cart.filter(i=> i.id !== action.payload.id)}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "CLEAR_CART":
            result = {...state, cart: []}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "UPDATE_CART":
            const {  newData } = action.payload;
            result = state.cart.findIndex(pro=> pro.id === action.payload.id)
            if (result !== -1) {
                state.cart[result] = { ...state.cart[result], ...newData };
            }
        case "ADD_TOKEN":
            result = {...state, token: action.payload}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "RELOAD":
            return {...state, reload: !state.reload}
        default:
            return state
    }

}