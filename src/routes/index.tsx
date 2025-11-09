import { Routes, Route } from "react-router-dom";
import Signup from "../components/pages/signup";
import Login from "../components/pages/login";
import HomePage from "../components/pages/homePage";
import ProfilePage from "../components/pages/profilePage";
import { NavigationProvider } from "../contexts/navigationContext"

export function AppRoutes() {
  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
        </main>
      </div>
    </NavigationProvider>
  );
}