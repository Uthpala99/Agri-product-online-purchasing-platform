import axios from "axios";

export const getAllAgriProducts = () => async (dispatch) => {
  dispatch({ type: "GET_AGRIPRODUCTS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:8000/api/agriproduct/getallagriproducts"
    );
    console.log(response);
    dispatch({ type: "GET_AGRIPRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_AGRIPRODUCTS_FAILED", payload: error });
  }
};

export const getAgriProductById = (agriproductid) => async (dispatch) => {
  dispatch({ type: "GET_AGRIPRODUCTBYID_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:8000/api/agriProduct/getagriproductbyid",
      { agriproductid }
    );
    console.log(response);
    dispatch({ type: "GET_AGRIPRODUCTBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_AGRIPRODUCTBYID_FAILED", payload: error });
  }
};

export const filterAgriProducts = (searchkey, category) => async (dispatch) => {
  var filteredAgriProducts;
  dispatch({ type: "GET_AGRIPRODUCTS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:8000/api/agriproduct/getallagriproducts"
    );
    filteredAgriProducts = response.data.filter((agriProduct) =>
      agriProduct.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredAgriProducts = response.data.filter(
        (agriProduct) => agriProduct.category.toLowerCase() === category
      );
    }
    console.log(response);
    dispatch({
      type: "GET_AGRIPRODUCTS_SUCCESS",
      payload: filteredAgriProducts,
    });
  } catch (error) {
    dispatch({ type: "GET_AGRIPRODUCTS_FAILED", payload: error });
  }
};

export const addAgriProduct = (agriProduct) => async (dispatch) => {
  dispatch({ type: "ADD_AGRIPRODUCT_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/agriProduct/addagriproduct",
      { agriProduct }
    );
    console.log(response);
    dispatch({ type: "ADD_AGRIPRODUCT_SUCCESS" });
    window.location.href = "/admin/agriproductslist";
  } catch (error) {
    dispatch({ type: "ADD_AGRIPRODUCT_FAILED", payload: error });
  }
};

export const editAgriProduct = (editedagriProduct) => async (dispatch) => {
  dispatch({ type: "EDIT_AGRIPRODUCT_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/agriProduct/editagriproduct",
      { editedagriProduct }
    );
    console.log(response);
    dispatch({ type: "EDIT_AGRIPRODUCT_SUCCESS" });
    window.location.href = "/admin/agriproductslist";
  } catch (error) {
    dispatch({ type: "EDIT_AGRIPRODUCT_FAILED", payload: error });
  }
};

export const deleteAgriProduct = (agriproductid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/agriProduct/deleteagriproduct",
      { agriproductid }
    );
    alert("Agri Product Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something Went Wrong ");
    console.log(error);
  }
};
