import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VivoCard from "./VivoCard";

const Vivo = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jZfykgk/Screenshot-14.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bNGkwTk/Screenshot-15.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pb0Jhd7/Screenshot-16.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4  gap-5 my-5">
                {
                    items.map(phone => <VivoCard key={phone._id} phone={phone} items={items} setItems={setItems} ></VivoCard>)
                }
            </div>
        </div>
    );
};

export default Vivo;