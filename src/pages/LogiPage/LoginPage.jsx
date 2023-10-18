import { Link } from "react-router-dom";


const LoginPage = () => {

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log( email, password)

    }


    

    return (
        <div className="grid lg:place-items-center">
         <div className="bg-slate-300 rounded-lg p-10 lg:w-1/2 " >
                <form onSubmit={handelLogin } >
                        <p className="text-center text-2xl font-bold">User Login</p>
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

                        <input className="btn btn-block bg-[#364058]  my-5 text-white hover:bg-[#21b68e]" type="submit" value="Login" />
              
                </form>

                <p>Do not have an account <Link className="text-[#33967c] font-bold" to={'/Registration'}>Register</Link></p>

                <button className="btn btn-block bg-[#364058] my-5 text-white hover:bg-[#21b68e]">Google Login</button>

            </div>

        </div>

    );
};

export default LoginPage;