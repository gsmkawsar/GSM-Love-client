import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";


const Apple = () => {
    const loadedApple = useLoaderData();
    const [apples, setApples ] = useState(loadedApple);

    return (


        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
             apples.map(apple => <AppleCard key={apple._id} apple={apple} apples={apples} setApples={setApples} ></AppleCard>)  
            }
        </div>
    );
};

export default Apple;