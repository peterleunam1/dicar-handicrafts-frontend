import { FC } from "react";
import { CartItem, Button, TotalPanel, EmptyCart } from "../../../components";
import { useRouter } from "next/router";
import { getPlural, getTotalPrice } from "../../../utils";
import { cart } from "../../../constants";
import { useCart } from "../../../hooks";
import { ButtonContainer, HeaderList, Info } from "./cart-list.styled";

const CartList: FC = () => {
  const route = useRouter().push;
  const { cart: products, clearCart } = useCart();
  const lengthProducts: number = products.length;
  const totalPrice = getTotalPrice({ products, type: "checkout" });

  const handleClick = () => {
    route("/checkout/confirma-datos");
  };

  return (
    <>
      {products.length ? (
        <section>
          <ButtonContainer width="15%">
            <Button
              text="Limpiar carrito"
              bg="#e8e8e8"
              hover="#cececec3"
              mt="0"
              mb=".9375rem"
              onClick={() => {
                clearCart();
              }}
            />
          </ButtonContainer>
          <HeaderList>
            <Info>
              <strong>{cart.title}</strong>
              <p>
                {lengthProducts}{" "}
                {getPlural({
                  qty: lengthProducts,
                  word: "producto",
                })}
              </p>
            </Info>
            <ButtonContainer width="25%">
              <Button
                text="Proceder al pago"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
                onClick={handleClick}
              />
            </ButtonContainer>
          </HeaderList>

          {products.map((element) => {
            return <CartItem mode="complete" item={element} key={element.id} />;
          })}
          <TotalPanel total={totalPrice} onClick={handleClick} />
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartList;
