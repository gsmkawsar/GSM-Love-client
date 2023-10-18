import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-10/12 m-auto my-5">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default MainLayout;