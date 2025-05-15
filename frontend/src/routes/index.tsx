import { Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout/index";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
export function RouteWeb() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}
