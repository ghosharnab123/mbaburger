import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home"
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
 
  const {isAuthenticated } = false   //useSelector((state) => state.auth);
  return (
    <Router>
       <Navbar isAuthenticated={isAuthenticated}/>
       <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart />} />
       </Routes>
       <Toaster />
       <Footer />
    </Router>
  )
}

export default App
