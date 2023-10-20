import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";


const Apple = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems ] = useState(loadedPhone);

    return (


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
             items.map(phone => <AppleCard key={phone._id} phone={phone} items={items} setItems={setItems} ></AppleCard>)  
            }
        </div>
    );
};

export default Apple;