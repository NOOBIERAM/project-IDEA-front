const Navbar = () => {
    return (
        <nav className="w-full h-15 bg-white backdrop-blur-3xl shadow-lg flex items-center justify-between px-10">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold">
                    Project-IDEA
                </span>
                <ul className="flex space-x-15 font-semibold">
                    <li>Idée</li>
                    <li>Epingler</li>
                    <li>Corbeille</li>
                </ul>
                <div className="flex space-x-3 font-semibold">
                    <h1>User</h1>
                    <button>Deconnexion</button>
                </div>
        </nav>
    )
}

export default Navbar