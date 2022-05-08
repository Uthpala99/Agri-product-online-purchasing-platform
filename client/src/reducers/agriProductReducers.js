export const getAllAgriProductsReducer = (state={agriProducts:[]} , action) =>{

    switch(action.type)
    {
        case 'GET_AGRIPRODUCTS_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_AGRIPRODUCTS_SUCCESS' : return{
            loading : false,
            agriProducts : action.payload
        }
        case 'GET_AGRIPRODUCTS_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state
    }
}