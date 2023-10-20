import { Link } from "react-router-dom";


const Category = () => {

 

    return (


            <div className="grid lg:grid-cols-6  gap-5 my-5">


                <div className="card card-compact  bg-[#1428a0] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/samsung.png" alt="Shoes" /></figure> 
                    <Link to={'/Samsung'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">Samsung</h2>
                    </div>
                    </Link>
                </div>
                <div className="card card-compact  bg-[#415fff] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/vivo.png" alt="Shoes" /></figure> 
                    <Link to={'/Vivo'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">Vivo</h2>
                    </div>
                    </Link>
                </div>
                <div className="card card-compact  bg-[#006b33] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/oppo.png" alt="Shoes" /></figure> 
                    <Link to={'/Oppo'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">Oppo</h2>
                    </div>
                    </Link>
                </div>
                <div className="card card-compact  bg-[#f50000] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/oneplus.png" alt="Shoes" /></figure> 
                    <Link to={'/OnePlus'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">OnePlus</h2>
                    </div>
                    </Link>
                </div>
                <div className="card card-compact  bg-[#ff6900] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/xiaomi.png" alt="Shoes" /></figure> 
                    <Link to={'/Xiaomi'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">Xiaomi</h2>
                    </div>
                    </Link>
                </div>
                <div className="card card-compact  bg-[#acacac] shadow-xl">
                    <figure><img className="w-full" src="https://devicexplore.com/frontend_asset/media/apple.png" alt="Shoes" /></figure> 
                    <Link to={'/Apple'}>
                    <div className="card-body flex items-center ">
                        <h2 className="card-title text-white ">Apple</h2>
                    </div>
                    </Link>
                </div>


            </div>



            );
};

            export default Category;