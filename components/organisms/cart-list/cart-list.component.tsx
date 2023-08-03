import { FC } from "react";
import styled from "styled-components";
import { CartItem, Button, TotalPanel, EmptyCart } from "../../../components";
import { useRouter } from "next/router";
import { getPlural, getTotalPrice } from "../../../helpers";
import { cart } from "../../../constants";
import { useCart } from "../../../hooks";

const HeaderList = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #e8e8e8;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    padding-bottom: 10px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  @media (max-width: 500px) {
    width: 100%;
  }
  strong {
    text-transform: uppercase;
    font-size: 15px;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  p {
    text-transform: uppercase;
    font-size: 700;
    font-size: 13px;
  }
`;
const ButtonContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "25%"};
  display: flex;
  justify-content: flex-start;

  @media (max-width: 500px) {
    width: 50%;
    margin-top: 10px;
  }

  ${(props) =>
    props.width === "25%" &&
    `
    @media (max-width: 500px) {
      display: none;
    }
  `}
`;

const CartList: FC = () => {
  const route = useRouter().push;
  const { cart: products, clearCart } = useCart();
  const lengthProducts: number = products.length;
  const totalPrice = getTotalPrice({ products, type: "checkout"  });

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
              mt="0px"
              mb="15px"
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
