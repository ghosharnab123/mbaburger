import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import '../../style/Navbar.css'
// eslint-disable-next-line react/prop-types
const Navbar = ({isAuthenticated = false}) => {
  return (
<nav>
      <div>
        <IoFastFoodOutline />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
