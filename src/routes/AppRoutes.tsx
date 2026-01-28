import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landing/LandingPage"
// import PrivateRoute from "./PrivatesRoutes"
import RegisterPage from "../pages/auth/RegisterPage"
import LoginPage from "../pages/auth/LoginPage"
import IdeaLayout from "../layouts/IdeaLayout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/idea" element={<PrivateRoute>
                <IdeaPage />
            </PrivateRoute>} /> */}
            <Route path="/idea" element={<IdeaLayout />}>
                
            </Route>
        </Routes>
    )
}


export default AppRoutes