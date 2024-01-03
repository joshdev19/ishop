import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {

  return (
    <Routes>
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/" element={ <Products/> } />
      <Route path="/product/details/:id" element={ <ProductDetails/> } />
    </Routes>
  )

}

export default App;