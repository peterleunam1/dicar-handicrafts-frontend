import { NextPage } from "next";
import { CartList, ShopLayout } from "../../components";
const Cart:NextPage = () => {
    return(
        <ShopLayout title="Carrito de compras" descriptionPage="Gestiona tus productos para la compra">
            <h1>Carrito de compras</h1>
        <CartList/>
        </ShopLayout>
    )
}
export default Cart