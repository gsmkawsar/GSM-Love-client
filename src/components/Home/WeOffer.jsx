import { CiDeliveryTruck } from 'react-icons/ci';
import { MdPayments } from 'react-icons/md';
import { ImCart } from 'react-icons/im';
import { BiSupport } from 'react-icons/bi';

const WeOffer = () => {
    return (
        <div>

            <div className="text-center   ">
                <h2 className="text-3xl font-extrabold mb-2 mt-5">What We Offer!</h2>
    
                <p className='font-semibold lg:w-2/4 mx-auto '>Shifting from a business perspective, mobile  have been making a lot of profits because they offer convenience to consumers, easy management, and store data</p>
            </div>
            <div className="grid lg:grid-cols-4  gap-5 my-5">

                <div className="bg-slate-200 border-4  border-b-emerald-600  rounded-lg drop-shadow-lg p-10 text-center">
                    <div className='text-8xl flex justify-center text-emerald-600'>
                        <CiDeliveryTruck />
                    </div>
                    <h3 className=' text-2xl font-semibold mb-3'>Free Delivery</h3>
                    <p>It is important for businesses to consider the cost implications of offering free delivery, as shipping costs can significantly impact profit margins.</p>


                </div>
                <div className="bg-slate-200 border-4  border-b-red-600  rounded-lg drop-shadow-lg p-10 text-center">
                    <div className='text-8xl flex justify-center text-red-600'>
                        <MdPayments />
                    </div>
                    <h3 className=' text-2xl font-semibold mb-3'>Secure Payment</h3>
                    <p>Securing payments is a critical aspect of online transactions, especially in today's digital age where cyber threats are prevalent..</p>


                </div>
                <div className="bg-slate-200 border-4  border-b-blue-600  rounded-lg drop-shadow-lg p-10 text-center">
                    <div className='text-8xl flex justify-center text-blue-600'>
                        <ImCart />
                    </div>
                    <h3 className=' text-2xl font-semibold mb-3'>Free Returns</h3>
                    <p>When a company offers free returns, it means that they will cover the costs associated with returning the product, such as shipping fees </p>


                </div>
                <div className="bg-slate-200 border-4  border-b-yellow-500  rounded-lg drop-shadow-lg p-10 text-center">
                    <div className='text-8xl flex justify-center text-yellow-500'>
                        <BiSupport />
                    </div>
                    <h3 className=' text-2xl font-semibold mb-3'>24/7 Support</h3>
                    <p>24/7 support typically refers to a service or system that is available around the clock, 24 hours a day, seven days a week.</p>


                </div>

            </div>
        </div>

    );
};

export default WeOffer;