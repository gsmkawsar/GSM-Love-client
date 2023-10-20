
import { useLoaderData } from 'react-router-dom';
import Benar from './Benar';
import Category from './Category';


import WeOffer from './WeOffer';


const Home = () => {

    const categorys = useLoaderData()




    return (
        <div>

            <Benar></Benar>

            <div className="text-center   ">
                <h2 className="text-3xl font-extrabold mb-2 mt-5">Shop By Brands</h2>
                <p className='font-semibold lg:w-2/4 mx-auto '>Select Your Favorite Brands And Purchase</p>
            </div>
            <Category></Category>

            <WeOffer></WeOffer>
        </div>
    );
};

export default Home;