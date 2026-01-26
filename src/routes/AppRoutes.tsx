import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import PrivateRoute from "./PrivatesRoutes"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/logged" element={<PrivateRoute><div>logged</div></PrivateRoute>} />
        </Routes>
    )
}


export default AppRoutes