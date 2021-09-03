import * as api from '../api';

export const getAll = () => async (dispatch) => {
    try {
        const {data} = await api.getAll;
        dispatch({ type: 'GET_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addToCart = (item) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    } catch (error) {
        console.log(error.message);
    }
}