
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


const MyCart = () => {

    const loaededitems = useLoaderData();
    
   const [items, setItems] = useState(loaededitems)

    return (
        <div className="grid lg:grid-cols-4  gap-5 my-5">
            {
                items?.map(item=>  <Card key={item._id} item={item}  items={items}  setItems={ setItems}> </Card>)
            }
        </div>
    );
};

export default MyCart;