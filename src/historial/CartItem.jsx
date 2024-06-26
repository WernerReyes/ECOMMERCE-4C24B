import React from "react";

const CartItem = ({
  imageSrc,
  productName,
  priceUnidad,
  quantity,
  priceTotal,
}) => {
  return (
    <tr>
      <td className="product-thumbnail">
        <img src={imageSrc} alt="Image" className="img-fluid" />
      </td>
      <td>{productName}</td>
      <td>
        <div
          className="input-group mb-3 d-flex align-items-center quantity-container"
          style={{ maxWidth: "120px" }}
        >
          <input
            type="text"
            className="form-control text-center quantity-amount"
            value={quantity}
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </td>
      <td>{priceUnidad}</td>
      <td>S/.{priceTotal}</td>
      
    </tr>
  );
};

export default CartItem;
