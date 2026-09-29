import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = (subtotal * state.coupon) / 100;

  const discountedTotal = subtotal - discount;

  const gst = discountedTotal * 0.18;

  const grandTotal = discountedTotal + gst;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 10,
      });

      setCouponMessage("Coupon applied! 10% discount.");
    } else {
      dispatch({
        type: "APPLY_COUPON",
        payload: 0,
      });

      setCouponMessage("Invalid coupon code.");
    }
  };

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <div className="quantity">
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                >
                  +
                </button>
              </div>

              <p>
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="remove"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="coupon">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />

            <button onClick={applyCoupon}>Apply Coupon</button>

            {couponMessage && <p>{couponMessage}</p>}
          </div>

          <div className="summary">
            <h3>Order Summary</h3>

            <p>
              Subtotal: <span>₹{subtotal.toFixed(2)}</span>
            </p>

            <p>
              Discount: <span>- ₹{discount.toFixed(2)}</span>
            </p>

            <p>
              GST (18%): <span>₹{gst.toFixed(2)}</span>
            </p>

            <hr />

            <h2>
              Grand Total: ₹{grandTotal.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;