import { useState } from "react"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-100 fixed w-full ">
            <div className="flex items-center relative justify-between px-6 py-4 bg-zinc-300 shadow-md">
                <div className="logo">
                    <h1 className="text-3xl font-bold text-gray-800">Ruma</h1>
                </div>
                <div>
                    <ul className="hidden md:flex space-x-10   text-sm font-medium">
                        <li><a href="#home" className="text-gray-800 hover:text-gray-600">MEN</a></li>
                        <li><a href="#shop" className="text-gray-800 hover:text-gray-600">WOMEN</a></li>
                        <li><a href="#about" className="text-gray-800 hover:text-gray-600">KIDS</a></li>
                        <li><a href="#contact" className="text-gray-800 hover:text-gray-600">BEAUTY</a></li>
                    </ul>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <img className="w-6" src="/logos/menu.png" alt="" />
                </button>


            </div>
            
                {isOpen&&(
                <div className="absolute md:hidden bg-zinc-300 w-full top-18">
                    <ul className="[&>li]:p-4 [&>li]:ml-4 [&>li]:text-xl">
                        <li><a href="#home" className="text-gray-800 hover:text-gray-600">MEN</a></li>
                        <li><a href="#shop" className="text-gray-800 hover:text-gray-600">WOMEN</a></li>
                        <li><a href="#about" className="text-gray-800 hover:text-gray-600">KIDS</a></li>
                        <li><a href="#contact" className="text-gray-800 hover:text-gray-600">BEAUTY</a></li>
                    </ul>
                </div>
                )}
        </nav>

    )
}


export default Navbar