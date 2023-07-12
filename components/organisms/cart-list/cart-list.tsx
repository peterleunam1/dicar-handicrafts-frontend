import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { CartItem, Button, Summary } from "../../../components";
import { useRouter } from "next/router";
import { CartListProps, IProduct } from "../../../interfaces";
import useCart from "../../../hooks/useCart";
import EmptyCart from "../../molecules/empty-cart/empty-cart";

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
const ButtonC = styled.div<{ width?: string }>`
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
  ${(props) =>
    props.width === "100%" &&
    `
    @media (max-width: 500px) {
      width: 100%;
    }
  `}
`;
const SubTotal = styled.div`
  width: 100%;
  margin: 10px 0;
  border-top: 2px solid #e8e8e8;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  p {
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-of-type {
      margin-bottom: 5px;
    }
  }
`;
const Total = styled.p`
  color: #d32f2f;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bolder;
`;
const TotalComplete = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
`;
const TotalRight = styled.div`
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  @media (max-width: 500px) {
    width: 30%;
  }
`;
const TotalLeft = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  border-left: 1px solid #e8e8e8;
  margin: 15px 0;
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const SubTotalComplete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: normal;
  background-color: ${(props) => props.theme.card};
  padding: 5px 15px;
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }
`;
const TotalContainer = styled.div`
  padding: 5px 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CartList: FC<CartListProps> = ({ mode }) => {
  const route = useRouter().push;
  const { count, inCart, setInCart, setCount, update, qty } = useCart();
  const [total, setTotal] = useState(0);
  const handleClick = () => {
    route("/checkout/confirma-datos");
  };

  const ClearCart = () => {
    localStorage.removeItem("cartDicar");
    setInCart([]);
    setCount(0);
  };

  useEffect(() => {
    let totalx = 0;
    inCart?.forEach((item) => {
      totalx = total + item.price * (item.quantity || 1);
    });
    setTotal(totalx);
  }, [inCart, qty, update]);

  console.log(inCart)

  return (
    <>
      {mode === "complete" ? (
        <>
          {inCart ? (
            inCart?.length > 0 ? (
              <div>
                <ButtonC width="15%" onClick={ClearCart}>
                  <Button
                    text="Limpiar carrito"
                    bg="#e8e8e8"
                    hover="#cececec3"
                    mt="0px"
                    mb="15px"
                  />
                </ButtonC>
                <HeaderList>
                  <Info>
                    <strong>carrito de compras - artesanías dicar</strong>
                    <p>
                      {count} {count === 1 ? "producto" : "productos"}
                    </p>
                  </Info>
                  <ButtonC onClick={handleClick} width="25%">
                    <Button
                      text="Proceder al pago"
                      bg="#f6d1bc"
                      hover="rgba(246, 209, 188, 0.637)"
                    />
                  </ButtonC>
                </HeaderList>

                {inCart &&
                  inCart?.map((element: IProduct) => {
                    return (
                      <CartItem
                        mode="complete"
                        item={element}
                        key={element.id}
                      />
                    );
                  })}
                <TotalComplete>
                  <TotalRight>total</TotalRight>
                  <TotalLeft>
                    <SubTotalComplete>
                      <span>
                        subtotal:
                        <strong>{total}</strong>
                      </span>
                      <span>
                        costo de envío:
                        <strong>$ 10000</strong>
                      </span>
                    </SubTotalComplete>
                    <TotalContainer>
                      Total: <span>$ {total + 10000}</span>
                    </TotalContainer>
                    <ButtonC onClick={handleClick} width="100%">
                      <Button
                        text="Proceder al pago"
                        bg="#f6d1bc"
                        hover="rgba(246, 209, 188, 0.637)"
                      />
                    </ButtonC>
                  </TotalLeft>
                </TotalComplete>
              </div>
            ) : (
              <EmptyCart />
            )
          ) : null}
        </>
      ) : (
        <Summary>
          {inCart?.map((element) => {
            return <CartItem mode="summary" item={element} key={element.id} />;
          })}
          <SubTotal>
            <p>
              Subtotal<strong>$ {total}</strong>
            </p>
            <p>
              Envio <strong>$ 10000</strong>
            </p>
          </SubTotal>
          <Total>
            total <strong>$ {total + 10000}</strong>
          </Total>
        </Summary>
      )}
    </>
  );
};

export default CartList;
