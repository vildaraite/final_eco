import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {Experimental_CssVarsProvider} from "@mui/material";
import {createContext, useState} from "react";

const CartContext = createContext(null);


function App() {
    const [products, setProducts] = useState([]);

    const cart = {
        products,
        addProduct: (product) => {
            const copyOfProducts = [...products];
            const existingProduct = copyOfProducts.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.cartQuantity++;
            }
            else {
                copyOfProducts.push({...product, cartQuantity: 1});
            }

            setProducts(copyOfProducts);
        },
        removeProduct: (id) => {
            const filteredProducts = products.filter(p => p.id !== id);

            setProducts(filteredProducts);
        },
        increaseQuantity: (id) => {
            const copyOfProducts = [products];
            const product = copyOfProducts.find(p => p.id === id);

            if (product) {
                product.cartQuantity++;
                setProducts(copyOfProducts);
            }
        },
        decreaseQuantity: (id) => {
            const copyOfProducts = [products];
            const product = copyOfProducts.find(p => p.id === id);
            if(product) {
                product.cartQuantity--;
                setProducts(copyOfProducts);
            }
            }
        };
  return (

      <CartContext.Provider value={cart}>
          <Experimental_CssVarsProvider>
              <BrowserRouter>
                  <Header/>
                  <Content/>
                  <Footer/>
              </BrowserRouter>
          </Experimental_CssVarsProvider>
      </CartContext.Provider>

  );
}

export default App;
export {
    CartContext
}
