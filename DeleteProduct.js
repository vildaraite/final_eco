import {Button} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {deleteProduct} from "./api/productApi";
import {useNavigate} from "react-router-dom";
const DeleteProduct = ({productId, removeProduct}) => {

    const navigation = useNavigate();

    const onDeleteProduct = () => {
        deleteProduct(productId)
            .then(() => {
                if (removeProduct) {
                    removeProduct(productId);
                }
                navigation('/');
            })
            .catch((err) => console.log(err));
    }

    return (
        <Button variant="outlined"
                type="button"
                color="error" onClick={() => onDeleteProduct()}><DeleteTwoToneIcon/></Button>
    );
}

export default DeleteProduct;