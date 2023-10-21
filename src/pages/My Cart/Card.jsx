import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({ item ,items,  setItems}) => {

 

    const { _id, id, name, price, image } = item  || {}

    const handelDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-sigma-nine.vercel.app/myCard/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(item => item._id !== _id);
                            setItems(remaining);
                            console.log(remaining)
                        }

                    })
            }
        })

    }




    return (
        <div>

            <div className="card  bg-base-300 shadow-xl">
                <figure><img className="w-24" src={image} alt="Shoes" /></figure>

                <div className="p-5">
                    <h2 className="card-title">{name}</h2>

                    <div className="flex text-lg"> <p className="font-bold mr-2">Price:</p> <p> {price}$</p></div>
                    <div className=" flex justify-between items-center mt-2">
                        <div>
                            <NavLink to={`/product/${id}`} ><div className="bg-green-700 p-2 btn w-full text-white hover:bg-slate-800">Details</div></NavLink>
                        </div>
                        <button onClick={() => handelDelete(_id)} className="btn bg-[#df6335] text-white hover:bg-slate-600 ">X</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;