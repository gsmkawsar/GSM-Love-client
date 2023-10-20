import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OppoCard from "./OppoCard";

const Oppo = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (
        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
             items.map(phone => <OppoCard key={phone._id} phone={phone} items={items} setItems={setItems} ></OppoCard>)  
            }
        </div>
    );
};

export default Oppo;