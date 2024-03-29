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

export const getAgriProductByIdReducer = (state={} , action) =>{

    switch(action.type)
    {
        case 'GET_AGRIPRODUCTBYID_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_AGRIPRODUCTBYID_SUCCESS' : return{
            loading : false,
            agriProduct : action.payload
        }
        case 'GET_AGRIPRODUCTBYID_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state
    }
}


export const addAgriProductReducer = (state={} , action) =>{

    switch(action.type)
    {
        case 'ADD_AGRIPRODUCT_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'ADD_AGRIPRODUCT_SUCCESS' : return{
            loading : false,
            success : true,
        }
        case 'ADD_AGRIPRODUCT_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state
    }
}


export const editAgriProductReducer = (state={} , action) =>{

    switch(action.type)
    {
        case 'EDIT_AGRIPRODUCT_REQUEST' : return {
            editloading : true,
            ...state
        }
        case 'EDIT_AGRIPRODUCT_SUCCESS' : return{
            editloading : false,
            editsuccess : true,
        }
        case 'EDIT_AGRIPRODUCT_FAILED' : return {
            editerror : action.payload,
            editloading : false
        }
        default : return state
    }
}