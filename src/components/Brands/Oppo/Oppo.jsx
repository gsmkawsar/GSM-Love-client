import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OppoCard from "./OppoCard";

const Oppo = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/SwccXf5/oppoa85.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/6t9nPPc/oppoa5.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/XS490Jv/oppoa7.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
             items.map(phone => <OppoCard key={phone._id} phone={phone} items={items} setItems={setItems} ></OppoCard>)  
            }
        </div>
        </div>
    );
};

export default Oppo;