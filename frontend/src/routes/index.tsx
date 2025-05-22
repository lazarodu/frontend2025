import { Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout/index";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";
import { ProtectedRoute } from "../components/ProtectedRoute";
export function RouteWeb() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
