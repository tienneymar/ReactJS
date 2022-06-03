import React, { useEffect, useState, Fragment } from "react";

import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";


import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import "../sass/components/_checkout.scss";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  return (
    <Fragment>
      <h1>Thông Tin Hóa Đơn</h1>
      <br />
      <br />
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__btn">
            <form>
              <label for="fname">
                <i className="fa fa-user"></i> Họ Tên
              </label>
              <input type="text" id="fname" name="firstname" placeholder="" />
              <label for="email">
                <i className="fa fa-envelope"></i> Email
              </label>
              <input type="text" id="email" name="email" placeholder="" />
              <label for="adr">
                <i className="fa fa-address-card-o"></i> Địa Chỉ
              </label>
              <input type="text" id="adr" name="address" placeholder="" />

              <label for="city">
                <i className="fa fa-institution"></i> Số Điện Thoại
              </label>
              <input
                type="text"
                id="sodienthoau"
                name="sodienthoai"
                placeholder=""
              />

              <input type="submit" value="Đặt Hàng" className="btn" />
            </form>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}<hr/><br/>
          <div className="cart__info__txt">
            <p>Bạn Đang Có Tất Cả {totalProducts} Sản Phẩm </p>
            <hr/>
            <div className="cart__info__txt__price">
              <span>Tổng Tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))} VND</span>
           
            </div>
            <hr/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
