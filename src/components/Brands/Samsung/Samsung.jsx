import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";


const Samsung = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qBzSmcZ/Screenshot-11.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ByLdBc3/Screenshot-12.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0f9thBZ/Screenshot-13.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4  gap-5 my-5">
                {
                    items.map(phone => <SamsungCard key={phone._id} phone={phone} items={items} setItems={setItems} ></SamsungCard>)
                }
            </div>
        </div>
    );
};

export default Samsung;