import React, { useState } from "react";
import "./App.css";
import Header from './Header';
import Products from "./Products";
import Footer from './Footer'

export default function App() {

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Products />
        </main>
      </div>
      <Footer />
    </>
  );
}
