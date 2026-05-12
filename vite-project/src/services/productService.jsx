import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Get product API

export const getProduct = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}