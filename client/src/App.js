import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import PrivateComp from "./pages/PrivateComp";
import Home from "./pages/Home";
import AddEditProductForm from "./pages/AddEditProductForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<AddEditProductForm />} />
            <Route path="/product/:id" element={<AddEditProductForm />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
