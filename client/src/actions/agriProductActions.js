import axios from "axios" ;

export const getAllAgriProducts = () =>  async dispatch =>{
    dispatch({type:'GET_AGRIPRODUCTS_REQUEST'})

    try {
        const response = await axios.get('http://localhost:8000/api/agriproducts/getallagriproducts')
        console.log(response)
        dispatch({type:'GET_AGRIPRODUCTS_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_AGRIPRODUCTS_FAILED' , payload : error })
    }
} 