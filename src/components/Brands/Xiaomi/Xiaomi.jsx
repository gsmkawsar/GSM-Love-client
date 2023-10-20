import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import XiaomiCard from "./XiaomiCard";

const Xiaomi = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                items.map(phone => <XiaomiCard key={phone._id} phone={phone} items={items} setItems={setItems} ></XiaomiCard>)
            }
        </div>
    );
};

export default Xiaomi;