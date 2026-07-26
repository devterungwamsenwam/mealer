import { createContext, useState } from "react";

// create the context
export const ProductContext  = createContext();

// create a provider: is a super component
 export const ProductProvider = ({children}) => {
         const [products, setProducts] = useState([
                {
                    id: 1,
                    name: "Black Marker ",
                    qty: 10
                },
                {
                    id: 2,
                    name: "Display material",
                    qty: 20
                },
                {
                    id: 3,
                    name: "Flower Pots",
                    qty: 5
                }
            ]);
            // a function that accept a new product detail and insert it into product array
            // create a function that accept product id and delete the product with that id from inside the product state
            // a function that accept product id and details and update the product with the id in product state
        return (
            <ProductContext.Provider value={ {products, setProducts } }>
                    {children}
            </ProductContext.Provider>
        )
 }

//  export {ProductContext, ProductProvider}