

const UpdateProduct = () => {

    const handelUpdateProduct = e => {

        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const addProduct = { name, brandName, category, price, shortDescription, rating, image }
        console.log(addProduct)

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
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name="category" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full " />
                    </div>
                </div>
                {/* card */}

                <div className="form-control  ">
                    <label className="">
                        <span className="label-text font-bold">Image</span>
                    </label>
                    <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full " />
                </div>

                <input className="btn btn-block bg-[#364058]  my-5 text-white hover:bg-[#21b68e]" type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default UpdateProduct;