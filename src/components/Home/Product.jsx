

const Product = ({ product }) => {

    const { name, brandName, category, price, shortDescription, rating, image } = product || {};
    return (
        <div>

            <div className="bg-slate-200 border-4 drop-shadow-lg pb-4 ">
                <div className='mb-2'>
                    <img src={image} alt="" />
                </div>
                <h3 className=' text-2xl font-semibold mb-3'>{name}</h3>
                <p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </p>
                <p><span className="font-semibold">Price:</span> {price}$</p>
            </div>

        </div>
    );
};

export default Product;