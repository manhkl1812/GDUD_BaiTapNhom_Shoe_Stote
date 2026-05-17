import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function MainLayout({ props, children }) {
  return (
    <div>
      <Header />

      {props}
      {children}
      <Footer />
    </div>
  );
}
