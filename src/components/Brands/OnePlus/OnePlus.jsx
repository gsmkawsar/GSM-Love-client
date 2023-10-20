import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OnePlusCard from "./OnePlusCard";



const OnePlus = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                items.map(phone => <OnePlusCard key={phone._id} phone={phone} items={items} setItems={setItems} ></OnePlusCard>)
            }
        </div>
    );
};


export default OnePlus;