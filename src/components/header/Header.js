import {AppBar, Badge, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem";
import {ShoppingCartTwoTone} from "@mui/icons-material";
import {useContext} from "react";
import {CartContext} from "../../App";

const Header = () => {

    const {products} = useContext(CartContext);
    const totalQuantity = products.reduce((sum, {cartQuantity}) => sum + cartQuantity, 0);

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant="h6"
                            color="inherit"
                            noWrap sx={{ flexGrow: 1, textDecoration:'unset' }}
                            to="/"
                            component={NavLink}>
                    BECO
                </Typography>
                <nav>
                    <MenuItem path="/" value="Products"/>
                    <MenuItem path="/products/create" value="Create Product"/>
                    <MenuItem path="/users/registration" value="Create User"/>
                    <MenuItem path="/cart" value={
                        <Badge badgeContent={totalQuantity} color="primary">
                        <ShoppingCartTwoTone color="action"/>
                        </Badge>
                    }/>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;