import { Outlet } from "react-router-dom"
import Navbar from "../components/idea/IdeaNavbar"

const IdeaLayout = () => {
  return <div className="h-screen w-screen bg-gradient-to-br from-purple-200 via-pink-300 to-cyan-100 flex flex-col">
      <Navbar />
      <div className="bg-white/80 w-full h-full p-10">
        <Outlet/>
      </div>
  </div>
}

export default IdeaLayout