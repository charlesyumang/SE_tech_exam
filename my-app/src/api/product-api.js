import axios from "axios";

export const fetchProducts = (setProducts, setIsLoading) => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Failed to fetch posts: ", error);
      setIsLoading(false);
    });
};
