import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "white",
    textAlign: "left",
    padding: "20px", // Increased padding for better spacing
    display: "flex",
    justifyContent: "space-between", // Distribute content evenly
    alignItems: "center", // Center items vertically
  };

  const logoStyle = {
    maxWidth: "100px", // Adjust the maximum width of the logo
    maxHeight: "40px", // Adjust the maximum height of the logo
  };

  const widgetAreaStyle = {
    flex: 1, // Allow the widget area to take remaining space
    marginLeft: "20px", // Add some space between the logo and widget area
  };

  return (
    <footer style={footerStyle}>
      <div>
        <img
          src="your_logo_url.jpg" // Replace with the actual URL of your logo
          alt="Logo"
          style={logoStyle}
        />
        <br />
        <span>Copyright © 2024 Prodi Program Profesi Insinyur UNTIRTA</span>
      </div>
    </footer>
  );
};

export default Footer;
