import React from 'react';

const SingleProduct = ({ products }) => {

    const { _id, name, brandName, category, price, shortDescription, rating, image } = products || {}

    return (
        <div>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <div className="p-4">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <div className="rating rating-sm mt-5  ">
                        <input type="radio" name="rating-9" className="rating-hidden" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <p className="card-title ml-3">{rating}</p>
                    </div>
                    <p className='text-xl mb-1'><span className='font-semibold'>Brand Name: </span>{brandName}</p>
                    <p className='text-xl mb-1'><span className='font-semibold'>Category: </span>{category}</p>
                    <p className='text-xl mb-5'><span className='font-semibold'>Price: </span>{price}</p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-[#21b68e] text-white hover:bg-slate-600 w-full">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;