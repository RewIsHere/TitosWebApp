import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Sucursales from "./pages/Sucursales";
import Test from "./components/Admin/Test";
import Test2 from "./components/Admin/Test2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/sucursales" element={<Sucursales />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route
          exact
          path="/admin"
          element={<Navigate to="/admin/dashboard" />}
        />
        <Route exact path="/admin/dashboard" element={<Test />} />
        <Route exact path="/admin/test" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
