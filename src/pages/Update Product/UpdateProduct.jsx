import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, name, brandName, category, price, shortDescription, rating, image } = product || {};

    console.log(product)

    const handelUpdateProduct = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const addProduct = { name, brandName, category, price, shortDescription, rating, image }
        console.log(addProduct)

        fetch(`https://assignment-10-server-sigma-nine.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Update Successfully')
                }
            })

    }



    return (
        <div>
            <form onSubmit={handelUpdateProduct}>
                {/* card */}
                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brandName" defaultValue={brandName} className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <input type="text" placeholder="Short Description" name="shortDescription" defaultValue={shortDescription} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}

                <div className="form-control  ">
                    <label className="">
                        <span className="label-text font-bold">Image</span>
                    </label>
                    <input type="text" placeholder="Image URL" name="image" defaultValue={image} className="input input-bordered w-full " />
                </div>

                <input className="btn btn-block bg-[#364058]  my-5 text-white hover:bg-[#21b68e]" type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateProduct;