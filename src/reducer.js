export const initialState={
    cart: [],
    user:null,
};
//selector
export const getCartTotal = (cart)=>{
    let amount=0;
     cart?.forEach(element => {
               amount +=element.price;         
     });
     return amount;
    };


const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart, action.item],
            };    

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            
            let newCart = [... state.cart];

            if(index >=0){
                newCart.splice(index, 1);
            }else{
                console.warn(
                '   cart dont have this item'
                )
            } return{
                ...state,
                cart: newCart
            }

         
          default:
              return state;  
    }
};
export default reducer;