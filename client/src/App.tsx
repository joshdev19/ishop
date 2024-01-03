import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";

const App = () => {

  return (
    <Routes>
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/" element={ <Products/> } />
    </Routes>
  )

}

export default App;