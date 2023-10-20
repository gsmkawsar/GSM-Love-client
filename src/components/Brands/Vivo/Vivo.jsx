import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VivoCard from "./VivoCard";

const Vivo = () => {
    const loadedPhone = useLoaderData();
    const [items, setItems] = useState(loadedPhone);

    return (


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                items.map(phone => <VivoCard key={phone._id} phone={phone} items={items} setItems={setItems} ></VivoCard>)
            }
        </div>
    );
};

export default Vivo;