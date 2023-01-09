import { Typography } from "antd";
import React from "react";
import { useLocation } from "react-router";
import LoginExperiences from "../../components/loginExperiences/LoginExperiences";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

  const url = [
    "/payment-success",
    "/step-up",
    "/billing-address",
    "/billing-summary",
    "/shipping",
    "/payment-method",
    "/cart"
  ];
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
  return (
    // Footer section starts
    <div className={selectedItem && selectedItem.length <= 2 && url.includes(location.pathname) ? "footer-main" : 'footer-main-1'}>
      {url.includes(location.pathname) ? (
        <LoginExperiences />
      ) : (
        <div className="footer-divider-first"></div>
      )}

      <div className="footer-wrapper">
        <Typography className="footer-content">
          Tee-Hee Tees is a sample application made with love by Descope
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
