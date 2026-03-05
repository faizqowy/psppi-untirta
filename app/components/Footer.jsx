import React from "react";
import Image from "next/image";

const Footer = () => {
  const footerStyle = {
    background: "white",
    padding: "40px",
    color: "rgb(51, 51, 51)",

    alignItems: "center",
  };

  const logoStyle = {
    maxWidth: "270px",
    maxHeight: "80px",
  };

  const linkStyle = {
    color: "#0693e3",
    textDecoration: "none",
    marginRight: "20px",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <Image src="/images/untirtalogo.jpg" alt="Logo UNTIRTA" width={80} height={80} style={logoStyle} />
        <div>
          <strong>Copyright © 2026 Prodi Program Profesi Insinyur UNTIRTA</strong>
        </div>
        <div>
          <a href="#" style={linkStyle}>
            Built by Tim WebDev Iconic Laboratory
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
