

const Email = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xjTC58n/a.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Get Latest Update by
                            Subscribe Our Newslater</h1>
                            <input type="text" placeholder="Enter your email" className="input input-accent w-full mb-5 " />
                        <button className="btn  bg-[#21b68e] w-full">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Email;