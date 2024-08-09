import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import '../../style/Menu.css'
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

    const addToCartHandler = (itemNum) => {
        switch (itemNum) {
          case 1:
            dispatch({ type: "cheeseBurgerIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
          case 2:
            dispatch({ type: "vegCheeseBurgerIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
          case 3:
            dispatch({ type: "burgerWithFriesIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
    
          default:
            dispatch({ type: "cheeseBurgerIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
        }
      };
 const menu = [
  { itemNum: 1, productSrc: burger1, price: 200, title: "Cheese Burger" },
  { itemNum: 2, productSrc: burger2, price: 500, title: "chicken Cheese Burger" },
  { itemNum: 3, productSrc: burger3, price: 800, title: "Cheese Burger with Franch Fry" },
 ]

  return (
<section id="menu">
      <h1>MENU</h1>

      <div>
        {menu.map((item)=>(
          <MenuCard
          key={item.itemNum}
          itemNum={item.itemNum}
          productSrc={item.productSrc}
          price={item.price}
          title={item.title}
          handler={addToCartHandler}
        />
        ))}
      </div>
    </section>
  )
}

export default Menu
