import React, { useState } from "react";
import "normalize.css";
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar/Navbar";
import { AppContainer } from "./styles/container";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MwContext } from "./contexts/MwContext";

const App: React.FC = () => {
  const [genderCategory, setGenderCategory] = useState("men");

  return (
    <>
      <GlobalStyle />
      <MwContext.Provider value={{ genderCategory, setGenderCategory }}>
        <Navbar />
        <AppContainer>
          {/* <Products /> */}
          {/* <ProductDetails /> */}
          {/* <Home /> */}

          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              {/* whatever Route you search that isn't one of the ones above will render: */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </AppContainer>
        <div>Footer</div>
      </MwContext.Provider>
    </>
  );
};

export default App;
