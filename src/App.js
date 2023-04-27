import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogIn from "./authentication/LogIn/LogIn";
import Register from "./authentication/Register/Register";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import Products from "./pages/Products/Products";
import CatgProducts from "./pages/CatgProducts/CatgProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchProducts from "./pages/SearchProducts/SearchProducts";
import Cart from "./pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DeliveryInfo from "./pages/ShippingInfo/ShippingInfo";
import MyOrders from "./pages/MyOrders/MyOrders";
import UserProfile from "./pages/UserProfile/UserProfile";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<PrivateRoute>
              <Cart />
            </PrivateRoute>} />
            <Route exact path="/productDetails/:id" element={<ProductDetails />} />
            <Route exact path="/category/:categ" element={<CatgProducts />} />
            <Route exact path="/search/:key" element={<SearchProducts />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/shipping" element={<DeliveryInfo />} />
            <Route exact path="/my-orders" element={<PrivateRoute>
              <MyOrders/>
            </PrivateRoute>} />
            <Route exact path="/profile" element={<PrivateRoute>
              <UserProfile/>
            </PrivateRoute>} />

            
            <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        
        {/* toast container */} 
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
            />
    </BrowserRouter>
  );
}

export default App;
