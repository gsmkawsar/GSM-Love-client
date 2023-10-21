import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import XiaomiCard from "./XiaomiCard";

const Xiaomi = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QM5RNvq/a-1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/mJxS3zZ/a-1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/KLpt2pX/a-2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                items.map(phone => <XiaomiCard key={phone._id} phone={phone} items={items} setItems={setItems} ></XiaomiCard>)
            }
        </div>
        </div>
    );
};

export default Xiaomi;