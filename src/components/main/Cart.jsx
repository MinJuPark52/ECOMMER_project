import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from "react";

const Cart = () => {
  return (
    <>
      <p className="p-12 w-[90%] text-center">
        <AiOutlineExclamationCircle className="text-3xl mx-auto text-center" />
        <br />
        <br />
        장바구니에 담긴 상품이 없습니다.
      </p>
    </>
  );
};

export default Cart;
