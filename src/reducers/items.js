const initialState = {
    items: [],
    cart: []
}

const items = (state=initialState, action) => {
    switch(action.type){
        case 'GET_ALL':
            return {
                ...state,
                items: action.payload
            };
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
}

export default items;