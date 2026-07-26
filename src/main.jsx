import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger"
import Counter from "./Counter"
import Invento from "./Invento"
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from "./Meal"
// import bootstrap css that was installed as a package
// import "bootstrap/dist/css/bootstrap.css";
// const username = "gentlesammy";

//using context api follow this steps
//  create the context:  createContext() // import it at the top from react
export const AppNameContext = createContext();
  // create a provider: a provider is super component and it contains data|function that is to be accessed by the children component as value prop
  // wrap a provider around all the children that want to inherit the data
  // go inside children component that needs the data and consume the context: we use hook useContext(thecontextuwanuse)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <ProductProvider>
      <AppNameContext.Provider   value= {{appname:"Inveto App", theme: "dark"}} >
          <Invento />
      </AppNameContext.Provider>
    </ProductProvider> */}
    {/* <Blogger /> */}
    <Meal />
  </StrictMode>,

  // jsx: elements been rendered must have a root parent
  // <>
  //   <h1>Hello World, welcome to react class {username} </h1>
  //   <p>Greetings from mars {2+4} </p>

  // </>

)
