import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 999,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1799,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  },
];

function ProductList() {
  const { dispatch } = useCart();

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;