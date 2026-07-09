

const Final = () => {
    return (
        <section className='w-screen h-screen flex '>
            <div className="w-1/2 h-full ">
                <div className="flex flex-col w-full h-8/9 justify-between items-center">
                    <div>
                        <p className="font2 text-7xl pt-20 pl-5">Become a member and get 10% off your next purchase!</p>
                        <div className="flex w-130 ml-5 items-center gap-2 border-b-2">
                            <input type="text" className="focus:outline-none focus:border-transparent  mt-10 w-140 p-4 text-2xl" placeholder="youname@gmail.com" />
                            <img className="w-15 h-15 rounded-full mt-10 " src="assets/logos/arrow.png" alt="arrow" />
                        </div>
                    </div>
                    <div className="flex mb-15 mr-110 gap-30">
                        <div>
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
                        <div>
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
                <div className="logos">

                </div>
            </div>
            <div className="relative flex w-1/2 h-full bg-zinc-300">

                <img className="z-5 w-full h-full" src="/clothImages/image6.jpg" alt="" />

                <div className="z-10 h-[786px] w-40 border-r-2 border-white bg-black/30 backdrop-blur-xs absolute "></div>
                <div className="z-10 h-[786px] w-95 border-l-2 border-white bg-black/30 backdrop-blur-xs absolute right-0"></div>

                <div className="z-10 h-1/7 w-[415px] border-white border-t-2 bg-black/30 backdrop-blur-md absolute left-40 bottom-0 "></div>





            </div>
        </section>
    )
}

export default Final