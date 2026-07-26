import { createContext, useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Black Marker",
    qty: 10,
  },
  {
    id: 2,
    name: "Display material",
    qty: 20,
  },
  {
    id: 3,
    name: "Flower Pots",
    qty: 5,
  },
];

export const VibeProductContext = createContext(null);

export const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const fetchAllProducts = () => products;

  const addProduct = (productData) => {
    setProducts((prevProducts) => {
      if (typeof productData === "function") {
        return productData(prevProducts);
      }

      return [
        ...prevProducts,
        {
          id: productData?.id ?? `${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
          name: productData?.name ?? "",
          qty: Number(productData?.qty ?? 0),
        },
      ];
    });
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => {
      if (typeof productId === "function") {
        return productId(prevProducts);
      }

      return prevProducts.filter((product) => product.id !== productId);
    });
  };

  return (
    <VibeProductContext.Provider
      value={{ products, addProduct, deleteProduct, fetchAllProducts }}
    >
      {children}
    </VibeProductContext.Provider>
  );
};
