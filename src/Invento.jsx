
import "./assets/app.css";
import { useContext } from "react";
import Header from "./invento_components/Header";
import Form from "./invento_components/Form";
import Content from "./invento_components/Content";
import Footer from "./invento_components/Footer";

const Invento = () => {

  return (
    <div className="container">
      <Header  />
      <Form  />
      <Content  />
      <Footer />
    </div>
  );
};

export default Invento;