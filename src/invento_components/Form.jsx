import { useState } from "react";
import {useContext} from "react" // hook for consuming a context
import { ProductContext } from "../context/ProductContext"; // the particular context u wan consume

const Form = () => {
  const {products, setProducts} = useContext(ProductContext);
  const [formData, setFormData] = useState({ name: "", qty: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.qty) return;

    const randomId = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    setProducts((prevProducts) => [
      ...prevProducts,
      {
        id: randomId,
        name: formData.name.trim(),
        qty: Number(formData.qty),
      },
    ]);

    setFormData({ name: "", qty: "" });
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="product name"
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                className="form-control"
                placeholder="Qty"
              />
            </div>
            <div className="col-md-2 text-end">
              <input type="submit" value="Add Product" className="btn btn-primary mine" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
