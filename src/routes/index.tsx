import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/home";
import { Login } from "../components/pages/login";

export function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

    </div>
  );
}
