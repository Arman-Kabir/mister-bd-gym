import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Home from "./Components/Pages/Home/Home/Home";
import Services from "./Components/Pages/Services/Services/Services";
import Header from "./Components/Shared/Header/Header";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Login from "./Components/Signing/Login/Login";
import Register from "./Components/Signing/Register/Register";
import RequireAuth from "./Components/Signing/RequireAuth/RequireAuth";
import useServices from "./useServices/useServices";

export const ServicesContext = createContext([]);

function App() {
  const services = useServices();
  // console.log(services);


  return (
    <ServicesContext.Provider value={services}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>

          <Route path="/checkout/:checkoutId" element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div >
    </ServicesContext.Provider>
  );
}

export default App;
