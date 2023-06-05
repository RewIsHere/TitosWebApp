import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Sucursales from "./pages/Sucursales";
import Test from "./components/Admin/Test";
import Promos from "./components/Admin/Promos";
import PizzaAdd from "./components/Admin/PizzaAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        {/*<Route exact path="/menu/pizzas/:pizzaId" element={<PizzaAdd />} />*/}
        <Route exact path="/sucursales" element={<Sucursales />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        {/*<Route exact path="/sign-in" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/sign-up" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/cart element={<PizzaAdd />} />*/}
        {/*<Route exact path="/mispedidos element={<PizzaAdd />} />*/}
        {/*<Route exact path="/pedidos/:pedidoId element={<PizzaAdd />} />*/}

        {/* ADMIN LINKS */}

        <Route exact path="/admin" element={<Navigate to="/admin/menu" />} />
        {/*<Route exact path="/admin/dashboard" element={<PizzaAdd />} />*/}
        <Route exact path="/admin/menu" element={<Test />} />
        <Route exact path="/admin/menu/addpizza" element={<PizzaAdd />} />
        {/*<Route exact path="/admin/dashboard/editpizza/:pizzaId" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/addcombo" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/editcombo/:comboId" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/addextra" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/editextra/:extraId" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/addsize" element={<PizzaAdd />} />*/}
        {/*<Route exact path="/admin/dashboard/editsize/:sizeId" element={<PizzaAdd />} />*/}
        <Route exact path="/admin/promos" element={<Promos />} />
        {/*<Route exact path="/admin/promos/add" element={<Test2 />} />*/}
        {/*<Route exact path="/admin/promos/edit/:promoId" element={<Test2 />} />*/}
        {/*<Route exact path="/admin/pedidos" element={<Test2 />} />*/}
        {/*<Route exact path="/admin/pedidos/:pedidoId" element={<Test2 />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
