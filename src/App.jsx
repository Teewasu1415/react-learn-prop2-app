import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home"
import ShowProduct from "./pages/ShowProduct"
import ShowPerson from "./pages/ShowPerson"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ShowProduct" element={<ShowProduct />} />
        <Route path="ShowPerson" element={<ShowPerson />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
