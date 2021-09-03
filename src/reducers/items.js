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
        default:
            return state;
    }
}

export default items;