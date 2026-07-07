

const Navbar = () => {
    return (
        <nav className="z-100 fixed w-full">
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-300 shadow-md">
                <div className="logo">
                    <h1 className="text-3xl font-bold text-gray-800">Ruma</h1>
                </div>
                <div>
                    <ul className="flex space-x-10 text-sm font-medium">
                    <li><a href="#home" className="text-gray-800 hover:text-gray-600">MEN</a></li>
                    <li><a href="#shop" className="text-gray-800 hover:text-gray-600">WOMEN</a></li>
                    <li><a href="#about" className="text-gray-800 hover:text-gray-600">KIDS</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-gray-600">BEAUTY</a></li>
                </ul>
                </div>
            </div>
        </nav>

    )
}


export default Navbar