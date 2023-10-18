import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-10/12 m-auto my-10">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;