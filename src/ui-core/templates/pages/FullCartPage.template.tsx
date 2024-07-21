import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Heading } from "../../components";
import { FullCartItemCard } from "../../components";
// import { ShoppingBag } from "lucide-react";
import { Button } from "../../components/atoms/Button/button";

const FullCart: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [] };

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Heading variant="h2">Your Cart</Heading>
      <div className="flex flex-1 flex-col items-center">
        {cart.length === 0 ? (
          <h3 className="flex items-start mt-8 text-center">
            Your cart is empty
          </h3>
        ) : (
          <div className="flex flex-col items-center w-full gap-6 mt-5">
            {cart.map((item) => (
              <div className="w-full max-w-3xl">
                <FullCartItemCard
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="bg-white p-5 border-t border-gray-300 sticky bottom-0 flex justify-center gap-3 items-center shadow-md">
          <p className="text-lg font-bold mr-2">
            Total Price: Rs {total.toFixed(2)}
          </p>
          <Button variant="primaryDanger" onClick={clearCart}>
            Clear Cart
          </Button>

          <Button variant="secondary">
            {/* <ShoppingBag className="mr-2" /> */}
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default FullCart;
