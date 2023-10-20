
import toast from 'react-hot-toast';

const SingleProduct = ({ products }) => {

    const { _id, name, brandName, category, price, shortDescription, rating, image } = products || {}



    const addId ={ id: _id, name, brandName, category, price, shortDescription, rating, image }


    const handelAddMyCard = () =>{

        console.log(addId)

        fetch('http://localhost:5000/mycard', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Add My Card')
                }
            })
    

    }



    return (
        <div>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure><img className='' src={image} alt={name} /></figure>
                <div className="p-4 lg:w-3/4">
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

                    <div className="card-actions flex mb-10">
                        <button onClick={handelAddMyCard} className="btn bg-[#21b68e] text-white hover:bg-slate-600 ">Add To Card</button>
                        <button className="btn bg-[#df6335] text-white hover:bg-slate-600 ">Buy Now</button>
                    </div>
                    <p className='text-xl mb-2'><span className='font-semibold'>Description: </span></p>
                    <p>{shortDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;