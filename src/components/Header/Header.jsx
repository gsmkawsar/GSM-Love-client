import { NavLink } from "react-router-dom";


const Header = () => {

    const navLink = <>
        <li> <NavLink to={"/"}>Home</NavLink> </li>
        <li> <NavLink to={"/addProduct"}>Add Product</NavLink> </li>
        <li> <NavLink to={"/myCart"}>My Cart</NavLink> </li>
    </>



    return (
        <div className="bg-[#364058] " >
            <div className="navbar w-10/12 m-auto pt-4 pb-0 ">
                <div className="flex-1">
                    <a className=" text-white normal-case font-bold text-2xl lg:text-3xl"><span className="text-[#21b68e]">GSM</span> Manager</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://gsmmanager.com/frontend_asset/media/Benco-Mobile.webp" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge ">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>



            <div className=" w-10/12 m-auto ">

            <div >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu  menu-horizontal text-slate-50 text-base  ">
                    {navLink}
                </ul>
            </div>

            </div>



















        </div>
    );
};

export default Header;