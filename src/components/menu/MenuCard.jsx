
// eslint-disable-next-line react/prop-types
const MenuCard = ({ itemNum, productSrc, price, title, handler}) => {
    return (
      <div
        className="menuCard"
      >
        <div>Item {itemNum}</div>
        <main>
          <img src={productSrc} alt={itemNum} />
          <h5>₹{price}</h5>
          <p>{title}</p>
          <button onClick={() => handler(itemNum)}>Add to cart</button>
        </main>
      </div>
    );
  };

export default MenuCard
