import React from "react";
import { CartItemCardProps } from "./CartItemCard.types";
import CartButton from "../../atoms/Button/CartButton.component";

const CartItemCard: React.FC<CartItemCardProps> = ({
  id,
  title,
  image,
  price,
  quantity,
}) => {
  const totalPrice = price * quantity;

  return (
    <div className="flex justify-between items-center bg-white rounded-3xl w-[120%] h-auto max-w-[1000px] p-6 m-2 shadow-lg">
      <div className="flex items-center">
        <img
          className="w-24 h-auto object-cover rounded-lg mr-4"
          src={image}
          alt={title}
        />
        <div className="flex flex-col items-center justify-center p-7">
          <h3 className="text-xl text-black justify-center font-bold max-w-90">
            {title}
          </h3>
          <p className="text-lg text-blue-500 font-bold">{`Rs ${totalPrice.toFixed(
            2
          )} `}</p>
        </div>
      </div>
      <CartButton
        itemId={id}
        itemName={title}
        itemImage={image}
        itemPrice={price}
      />
    </div>
  );
};

export default CartItemCard;
