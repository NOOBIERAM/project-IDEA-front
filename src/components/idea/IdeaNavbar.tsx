const IdeaNavbar = () => {
    return (
        <nav className="w-full min-h-15 bg-white backdrop-blur-3xl flex items-center justify-between px-10 shadow-lg shadow-gray-100">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold max-sm:hidden">
                Project-IDEA
            </span>
            <ul className="max-sm:w-full flex space-x-15 items-center justify-between  font-semibold">
                <li>Idée</li>
                <li>Epingler</li>
                <li>Corbeille</li>
            </ul>
            <div className="flex space-x-3 font-semibold max-sm:hidden">
                <h1>User</h1>
                <button>Deconnexion</button>
            </div>
        </nav>
    )
}

export default IdeaNavbar