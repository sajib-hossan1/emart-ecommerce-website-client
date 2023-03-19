import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./authentication/LogIn/LogIn";
import Register from "./authentication/Register/Register";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";


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
    </BrowserRouter>
  );
}

export default App;
