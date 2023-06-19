import {Container} from "@mui/material";
import Product from "../forms/Product";
import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import Products from "../page/Products";
import ProductDetailPage from "../page/ProductDetailPage";
import Cart from "../page/Cart";
const Content = () => {

    return (
        <>
            <Container disableGutters maxWidth="xl" component="main"
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           minHeight: 'calc(100vh - 157px)',
                           mt: 4
                       }}>

                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/products/create" element={<Product key="create"/>}/>
                    <Route path="/users/registration" element={<User/>}/>
                    <Route path="/products/:productId/update" element={<Product key="update"/>}/>
                    <Route path="/products/:productId" element={<ProductDetailPage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Container>
        </>
    );
}

    export default Content;