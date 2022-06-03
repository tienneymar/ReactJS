import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Household_logo.png";
import sponsors1 from "../assets/images/sponsors.png";
import sponsors2 from "../assets/images/fedex_logo.png";
import sponsors3 from "../assets/images/uber.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={3} mdCol={1} smCol={1} gap={30}>
          <div>
            <div className="footer__title">Về Chúng Tôi</div>
            <p className="footer__logo">
              <Link to="/">
                <img src={logo} alt="#" style={{ width: "55%" }} />
              </Link>
            </p>
            <p className="footer__content">
            Website Rượu Ngoại luôn đem lại cho khách hàng những sản phẩm tốt nhất đạt chất lượng hàng đầu Châu Á...!
            </p>
          </div>

          <div>
            <div className="footer__title">Thông Tin Liên Hệ</div>
            <div className="footer__content" style={{ marginBottom: "2rem" }}>
              <p className="footer__content__info">
                <i class="bx bx-map"></i>
                <span>34 Thất Hùng-Kinh Môn-Hải Dương</span>
              </p>
              <a className="footer__content__info" href="...">
                <i class="bx bx-phone"></i>
                <span>+84 356 275 725</span>
              </a>
              <a
                className="footer__content__info"
                href="mailto:Abc123@donga.edu.vn"
              >
                <i class="bx bx-mail-send"></i>
                <span>nguyen.tien1880@gmail.com</span>
              </a>

              <p className="footer__content__info">
                <i class="bx bx-time-five"></i>
                <span>Mở Cửa Từ T2-T6 7AM - 09PM: GMT-1</span>
              </p>
            </div>

            <div className="footer__icon__info">
              <div className="icon_facebook">
                <a href="https://www.facebook.com/">
                  <button>
                    <i class="bx bxl-facebook-circle"></i>
                  </button>
                </a>
              </div>
              <a href="https://www.twitter.com/">
                <button>
                  <i class="bx bxl-twitter"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/">
                <button>
                  <i class="bx bxl-instagram"></i>
                </button>
              </a>
              <a href="https://www.youtube.com/">
                <button>
                  <i class="bx bxl-youtube"></i>
                </button>
              </a>
            </div>
          </div>

          <div>
            <div className="footer__title">Phát Triển</div>
            <div className="footer__content"></div>
            <p className="footer____sponsor__logo">
              <Link to="/">
                <img src={sponsors1} alt="#" style={{ width: "27%" }} />
              </Link>
              <Link to="/">
                <img
                  src={sponsors2}
                  alt="#"
                  style={{
                    width: "40%",
                    marginLeft: "1.3rem",
                    marginBottom: "1.2rem",
                  }}
                />
              </Link>
              <Link to="/">
                <img
                  src={sponsors3}
                  alt="#"
                  style={{
                    width: "20%",
                    marginLeft: "1.9rem",
                    marginBottom: "1.2rem",
                  }}
                />
              </Link>
            </p>
            <p className="footer__content">
             Các Công Ty Cùng Hợp Tác Và Phát Triển Từ Những Năm 2020
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
