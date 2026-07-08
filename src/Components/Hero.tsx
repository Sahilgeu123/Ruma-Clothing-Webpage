

export default function Hero() {
    return (
        <section className="hero-fullscreen relative w-full h-screen min-h-screen bg-transparent flex items-center justify-center overflow-hidden ">

            <div className="absolute inset-0 flex items-center justify-center z-6">
                <h1 className="text-[160px] md:text-[220px] lg:text-[320px] font-bold tracking-tight text-gray-400/50 select-none pointer-events-none z-10 ">
                    Ruma
                </h1>
            </div>

            <div className=" z-20 flex flex-col px-6">
                <p className="text-lg font-sans md:text-3xl absolute left-10 top-40 text-gray-600"><span className="font-bold">FASHION</span> <br /> THAT MOVES<br /> <span className="border-b-2 pb-2 font-bold">with</span> YOU.</p>

                <div className="mt-8 absolute left-10 bottom-5 flex gap-4">
                    <button className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition">Shop Now</button>
                    <button className="px-6 py-4 border-2 border-gray-800 text-gray-800 rounded-md hover:bg-zinc-300 font-semibold">Explore New In</button>
                </div>
                <div className=" bg-black right-10 bottom-5 hidden absolute sm:flex gap-4  rounded-2xl shadow-md">
                    <button className=" px-10 py-4 border-r-2 text-white border-2 rounded-l-2xl border-white">WISHLIST</button>
                    <button className="px-10 py-4 border-l-2 text-white  border-2 rounded-r-2xl">CART ( 0 )</button>
                </div>
                <div className=" absolute right-20 top-35 hidden md:flex  text-3xl text-gray-700">
                    <p>NEW <br /> COLLECTION <br /> <span className="border-b-2 pb-2">2026</span></p>
                </div>
            </div>
        </section>
    );
}
