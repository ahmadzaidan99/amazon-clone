import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarBorder";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [dispatch] = useStateValue();
  let halfRating = (rating - Math.floor(rating)) * 10;
  let outline = 0;
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__tile">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(Math.floor(rating))
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
          {halfRating > 0 ? <StarHalfIcon /> : <></>}
          {outline > 0
            ? Array(outline)
                .fill()
                .map((_, index) => <StarOutlineIcon key={index} />)
            : ""}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
