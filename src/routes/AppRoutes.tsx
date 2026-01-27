import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import PrivateRoute from "./PrivatesRoutes"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logged" element={<PrivateRoute><div>logged</div></PrivateRoute>} />
        </Routes>
    )
}


export default AppRoutes