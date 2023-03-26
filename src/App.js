import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogIn from "./authentication/LogIn/LogIn";
import Register from "./authentication/Register/Register";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/register" element={<Register />} />

            
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
