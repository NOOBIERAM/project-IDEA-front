import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landing/LandingPage"
// import PrivateRoute from "./PrivatesRoutes"
import RegisterPage from "../pages/auth/RegisterPage"
import LoginPage from "../pages/auth/LoginPage"
import IdeaLayout from "../layouts/IdeaLayout"
import IdeaPage from "../pages/idea/IdeaPage"
import SavedPage from "../pages/idea/SavedPage"
import TrashPage from "../pages/idea/TrashPage copy"
import PrivateRoute from "./PrivatesRoutes"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/idea" element={<PrivateRoute>
                <IdeaPage />
            </PrivateRoute>} /> */}
            <Route path="/idea" element={<PrivateRoute><IdeaLayout /></PrivateRoute>}>
                <Route index element={<IdeaPage />} />
                <Route path="saved" element={<SavedPage />}/>
                <Route path="trash" element={<TrashPage />}/>
            </Route>
        </Routes>
    )
}


export default AppRoutes