import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";


const RegistrationPage = () => {

    const {googleSingUp, createUser, userUpdateProfile} = useContext(AuthContext);

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.photo.value;

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }

        createUser(email, password)

        .then(res => {
            userUpdateProfile(name, img)       
        .then(res => {           
                toast.success('Successfully Registration!');

        })
    })

        .catch(error => {
          
                toast.error(error.message);
                   
            
        })


    }

    const handelGoogleRegister = () => {
        googleSingUp()
        .then(res => {
            console.log(res.user)
            if(res.user){
                toast.success('Successfully Registration!')
                return
            }
        })
        .catch(error => {
            if(error){
                toast.error(error.message)
                return
            }
            
        })

    }


    return (
        <div className="grid lg:place-items-center">
            <div className="bg-slate-300 rounded-lg p-10 lg:w-1/2 " >
                <form onSubmit={handelRegister} >
                    <p className="text-center text-2xl font-bold">Please Registration!</p>
                    <div className="form-control w-full s">
                        <label className="label font-bold">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full s">
                        <label className="label font-bold">
                            <span className="label-text ">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full s">
                        <label className="label font-bold">
                            <span className="label-text ">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label font-bold">
                            <span className="label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>

                    <input className="btn btn-block bg-[#364058]  my-5 text-white hover:bg-[#21b68e]" type="submit" value="Register" />

                </form>

                <p>Already have an account please <Link className="text-[#33967c] font-bold" to={'/login'}>Login</Link></p>

                <button onClick={handelGoogleRegister} className="btn btn-block bg-[#364058] my-5 text-white hover:bg-[#21b68e]">Google Register</button>

            </div>

        </div>
    );
};

export default RegistrationPage;