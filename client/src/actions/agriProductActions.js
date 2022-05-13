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

export const filterAgriProducts = (searchkey , category) =>  async dispatch =>{
    var filteredAgriProducts ;
    dispatch({type:'GET_AGRIPRODUCTS_REQUEST'})

    try {
        const response = await axios.get('http://localhost:8000/api/agriproducts/getallagriproducts')
        filteredAgriProducts = response.data.filter(agriProduct=>agriProduct.name.toLowerCase().includes(searchkey))
        if(category!='all'){
            filteredAgriProducts = response.data.filter(agriProduct=>agriProduct.category.toLowerCase()==category)
        }
        console.log(response)
        dispatch({type:'GET_AGRIPRODUCTS_SUCCESS' , payload : filteredAgriProducts})
    } catch (error) {
        dispatch({type:'GET_AGRIPRODUCTS_FAILED' , payload : error })
    }
} 

export const addAgriProduct=(agriProduct)=> async dispatch=>{
    dispatch({type:'ADD_AGRIPRODUCT_REQUEST'})
    try {
        const response = await axios.post('http://localhost:8000/api/agriproducts/addagriproduct' , {agriProduct})
        console.log(response);
        dispatch({type:'ADD_AGRIPRODUCT_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_AGRIPRODUCT_FAILED' , payload : error})
    }
}