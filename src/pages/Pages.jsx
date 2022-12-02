import React from "react";
import Home from "./Home";
import Form from "../components/Form";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default Pages;
