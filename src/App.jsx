
// import a css file
import "./css/mystyle.css"
//import the components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"

function App(){
  // sometimes this component get a piece of data from a backend application
  const pageVisit = 20 // this comes back from another application
  // lets assume we sent a request to a backend that fetch list of categories from database and we want to display it in hero section
  const categories = ["Soup", "Stew", "Snacks", "Swallow"] //we got this from a backend

  const products = [
     {
          id: 1,
          name: "Tomato ketchup",
          price: 4000,
          image: "hero.png"
      },
      {
          id: 2,
          name: "Apple ketchup",
          price: 10000,
          image: "hero.png"
     },
     {
          id: 3,
          name: "lemon ketchup",
          price: 2000,
          image: "hero.png"
     }
  ]  // lets assume we sent a request to a backend|api and what came back is array of object

  return(
       <div className="container">
            <Header  xyz = {pageVisit}   />
            <Hero cats={categories} />
            <Main  xyz={pageVisit}  products={products} />
            <Footer />
       </div>
  )

}

export default App