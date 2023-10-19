
import Benar from './Benar';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import WeOffer from './WeOffer';
import Product from './Product';

const Home = () => {


    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);

    return (
        <div>

            <Benar></Benar>

            <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            <WeOffer></WeOffer>
        </div>
    );
};

export default Home;