import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";


const LoginPage = () => {

    const {googleSingUp, signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }
        signIn(email, password)
        .then(res => {
            console.log(res.user)
            if(res.user){
                navigate(location.state ? location.state : '/' )
                toast.success('Successfully Login!')
                
            }
        })
        .catch(error => {
            if(error){
                toast.error(error.message)
            }
            
        })

    }

    const handelGoogleLogIn = ()=>{
        googleSingUp()
        .then(res => {
            if(res.user){
                navigate(location.state ? location.state : '/' )
                toast.success('Successfully Login!')
                
            }
        })
        .catch(error => {
            if(error){
                toast.error(error.message)
            }
            
        })
 
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

                <button onClick={handelGoogleLogIn} className="btn btn-block bg-[#364058] my-5 text-white hover:bg-[#21b68e]">Google Login</button>

            </div>

        </div>

    );
};

export default LoginPage;