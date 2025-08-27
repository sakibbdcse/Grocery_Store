import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import OrderManage from "../pages/OrderManage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/manage" element={<OrderManage />} />
      </Route>
    </Routes>
  );
};

export default Router;
