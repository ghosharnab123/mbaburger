
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch, useSelector } from "react-redux";
import '../../style/Cart.css'
// eslint-disable-next-line react/prop-types
const CartItem = ({ value, title, image, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={image} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);
const Cart = () => {
  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };
  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger === 0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (vegCheeseBurger === 0) break;
        dispatch({ type: "vegCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (burgerWithFries === 0) break;
        dispatch({ type: "burgerWithFriesDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (cheeseBurger === 0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };


  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Chese Burger"}
          image={burger1}
          value={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Chese Burger"}
          image={burger2}
          value={vegCheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Chese Burger with French Fry"}
          image={burger3}
          value={burgerWithFries}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax Amount</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping"> Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;