import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";


const Samsung = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems ] = useState(loadedPhone);

    return (


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
             items.map(phone => <SamsungCard key={phone._id} phone={phone} items={items} setItems={setItems} ></SamsungCard>)  
            }
        </div>
    );
};

export default Samsung;