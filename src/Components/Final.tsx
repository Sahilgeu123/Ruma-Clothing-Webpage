import "./final.css"

const Final = () => {
    return (
        <section className='w-screen mt-110 md:mt-0 h-screen flex '>
            <div className="xl:w-1/2 w-screen h-full ">
                <div className="flex flex-col w-full h-8/9 justify-between items-start">
                    <div>
                        <p className="font2 disc pt-20 pl-5">Become a member and get 10% off your next purchase!</p>
                        <div className="cont1 flex w-130 ml-5 items-center gap-2 border-b-2">
                            <input type="text" className=" focus:outline-none focus:border-transparent  mt-10 w-140 p-4 text-2xl" placeholder="youname@gmail.com" />
                            <img className="w-15 h-15 rounded-full mt-10 " src="/logos/arrow.png" alt="arrow" />
                        </div>
                    </div>
                    <div className="flex cont mb-45 ml-10 gap-15 md:gap-30">
                        <div className="subcont">
                            <p className="font-semibold font2 text-3xl pb-5">SHOP</p>
                            <ul className="flex flex-col gap-1 text-xl font2 [&>li]:cursor-pointer [&>li]:hover:text-gray-500 [&>li]:transition">
                                <li>WOMEN</li>
                                <li>DIVIDED</li>
                                <li>MEN</li>
                                <li>KIDS</li>
                                <li>HOME</li>
                                <li>UNIDAYS</li>
                            </ul>
                        </div>
                        <div className="subcont">
                            <p className="font-semibold font2 text-3xl pb-5">INFO</p>
                            <ul className="flex flex-col gap-1 text-xl font2 [&>li]:cursor-pointer [&>li]:hover:text-gray-500 [&>li]:transition">
                                <li>CAREER at RUMA</li>
                                <li>ABOUT RUMA</li>
                                <li>SUSTAILNIBILITY</li>
                                <li>PRESS</li>
                                <li>INVESTOR RELATIONE</li>
                                <li>Corporate Governance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logos flex items-center w-1/2 justify-between px-15 -ml-10">
                    <img className="w-15 h-15 rounded-full" src="/logos/facebook.png" alt="logo" />
                    <img className="w-12 h-12 mr-2 rounded-full" src="/logos/insta.png" alt="logo" />
                    <img className="w-8 h-8 mr-2 rounded-full" src="/logos/X.png" alt="logo" />
                    <img className="w-13 h-13 mr-2 rounded-full" src="/logos/telegram.png" alt="logo" />
                    <img className="w-10 h-10 ml-2 rounded-full" src="/logos/youtube.png" alt="logo" />

                </div>
            </div>
            <div className="image relative xl:flex flex-col w-0 lg:w-1/2 h-full hidden bg-zinc-300 overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src="/clothImages/image6.jpg" alt="" />
                <div className="w-full h-full flex justify-between">
                    <div className="z-10 h-full w-50 border-r-2 border-white bg-black/30 backdrop-blur-xs   flex"></div>
                    <div className="z-10 h-full w-85 lg:border-l-2 border-white bg-black/30 backdrop-blur-xs  flex"></div>
                </div>
            </div>
        </section>
    )
}

export default Final