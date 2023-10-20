import { useEffect } from "react";
import { NavLink } from "react-router-dom";


const AppleCard = ({ apple, apples, setApples }) => {

    const { _id, name, brandName, category, price, shortDescription, rating, image } = apple || {}


    useEffect(() => {

        const remaining = apples.filter(apple => apple.category == "iPhone");
        setApples(remaining);
    }, [])



    return (
        <div>
            <div className="card  bg-base-300 shadow-xl">
                <figure><img className="w-24" src={image} alt="Shoes" /></figure>

                <div className="p-5">
                    <h2 className="card-title">{name}</h2>

                    <div className="flex text-lg"> <p className="font-bold mr-2">Price:</p> <p> {price}$</p></div>
                    <div className=" flex justify-between items-center mt-2">
                        <NavLink to={`/product/${_id}`} ><div className="bg-green-700 p-2 btn w-full text-white hover:bg-slate-800">Details</div></NavLink>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AppleCard;