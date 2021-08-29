import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
// import { useUserContext } from "../context/user_context";

const CartPage = () => {
  const { cart } = useCartContext();
  // const { myUser, loginWithRedirect } = useUserContext();

  // if (myUser) {
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is currently empty</h2>
          <Link to="/products" className="btn">
            Add products to your cart
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
  // } else {
  //   return (
  //     <Wrapper className="page-100">
  //         <div className="empty">
  //           <h2>Your cart is currently empty</h2>
  //           <Link to="/products" className="btn">
  //             Add products to your cart
  //           </Link>
  //         </div>
  //       </Wrapper>
  // <div>
  //   <div className="empty page-100">
  //     <h3>Your Basket is empty</h3>
  //   </div>
  //   <button type="button" className="btn" onClick={loginWithRedirect}>
  //     login
  //   </button>
  // </div>
  // );
  // }
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
