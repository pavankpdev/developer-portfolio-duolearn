const Navbar = () => {
    return <>

        <div>
            <nav className="bg-white dark:bg-gray-800  ">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <h2 className={'text-white text-2xl'}>Pavan's Portfolio</h2>
                            </a>
                        </div>
                        <div className="block">
                            <div className="flex items-center ml-4 md:ml-6">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </>
}

export default Navbar;