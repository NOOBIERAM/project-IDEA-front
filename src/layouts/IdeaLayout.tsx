import { Outlet } from "react-router-dom"
import Navbar from "../components/idea/IdeaNavbar"

const IdeaLayout = () => {
  return (
    // <div className="h-screen w-screen bg-gradient-to-br from-purple-400/10 via-pink-100/20 to-cyan-300/20 flex flex-col">
    <div className="h-screen w-screen bg-white flex flex-col">
      <Navbar />
      <div className="bg-white/80 w-full h-full">
        <Outlet />
      </div>
    </div>)
}

export default IdeaLayout