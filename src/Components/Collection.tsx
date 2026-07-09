export default function Collection() {
    return (
        <section className="flex flex-col md:flex-row h-screen mt-200 md:mt-70  min-h-screen detail ">
            <div className=" w-full md:w-1/2 flex h-full md:backdrop-blur-md  bg-transparent ">
                <div className="w-39 bg-black h-full text-white hidden  md:flex
              flex-col gap-7 justify-center items-center  pt-5 text-2xl">
                    <p>C</p>
                    <p>O</p>
                    <p>L</p>
                    <p>L</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p>I</p>
                    <p>O</p>
                    <p>N</p>
                </div>
                <div className="h-full w-full hidden md:flex items-center justify-center">
                    <img className="w-90 h-170 mt-13 " src="/clothImages/image2.png" alt="" />
                </div>
            </div>
            <div className="min-h-screen md:w-1/2 relative bg-black text-white">
                <p className=" absolute font  top-37 left-20 md:left-20 xl:left-50 text-3xl ">NEW SEASON</p>
                <p className=" absolute font2 top-53 left-20 md:left-20 xl:left-50 text-9xl ">NEW <br /> VIBES</p>
                <p className=" absolute font2 bottom-50 left-20 md:left-20 xl:left-50 text-2xl">Discover everything</p>
                <p className="absolute font2 bottom-41 left-20 md:left-20 xl:left-50  text-2xl">new and now.</p>
                <button className="absolute bottom-15 left-20 md:left-20 xl:left-50 border-2 border-white
                 px-10 py-3 font-bold text-2xl hover:scale-105 transition" >EXPLORE COLLECTION</button>
            </div>
        </section>
    );
}
