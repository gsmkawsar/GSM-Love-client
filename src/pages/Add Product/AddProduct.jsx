import toast from "react-hot-toast";

const AddProduct = () => {


    const handelAddroduct = e => {

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

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Successfully Add Product!')
                }
            })
    }



    return (
        <div>
            <form onSubmit={handelAddroduct}>
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
                            <span className="label-text font-bold">Type</span>
                        </label>

                        {/* <select className="select select-bordered w-full ">
                            <option disabled selected>Category</option>
                            <option>iphone</option>
                            <option>Xiaomi</option>
                            <option>Vivo</option>
                            <option>Samsung</option>
                            <option>Oppo</option>
                            <option>OnePlus</option>
                        </select> */}

                        <input type="text" placeholder="Category" name="category" className=" select select-bordered w-full " />

                    </div>
                    <div className="form-control  ">
                        <label className="">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full  " />
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

export default AddProduct;