import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";


const Product = () => {

    const { id } = useParams();
    const loadedProduct = useLoaderData();
    const [products, setProduct] = useState({});


    useEffect(() => {
        const remaining = loadedProduct?.find(product => product._id == id);
        setProduct(remaining);
    }, [id, loadedProduct]);





    return (
        <div>
          
         <SingleProduct products={products}></SingleProduct>
        
        </div>
    );
};

export default Product;