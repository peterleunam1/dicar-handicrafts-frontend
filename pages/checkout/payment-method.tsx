import { Button, ShopLayout } from "../../components";
import styled from "styled-components";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { sendIdToServer } from "../../services/stripe/stripe";
import { useRouter } from "next/router";
import Image from "next/image";
import CreditCart from "../../public/assets/credit-card.gif";

const stripePromise = loadStripe('pk_test_I5S3jCmpIIXtf3nBq2s0aQd7');

const PaymentMethodFormStyled = styled.div`
  text-align: center;
`;

const FormStyled = styled.form`
  width: 50%;
  margin: 0 auto;

  button {
    margin: 20px 0;
  }
`;

const PaymentMethodForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      const data = await sendIdToServer(paymentMethod!.id, amount);
      if (data?.data.message === "Pagado correctamente! ") {
        router.push("/checkout/congratulations");
      }
    }
  };

  return (
    <FormStyled>
      <Image src={CreditCart} alt="Credit card" height={"200px"} width="200px"></Image>
      <CardElement />

      <div className="button" onClick={handleSubmit}>
        <Button
          text="Proceder con el pago"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="25px"
          mb="10px"
        />
      </div>
    </FormStyled>
  )
}

const PaymentMethod = () => {
  const { amount } = useRouter().query as any;
  return (
    <ShopLayout title="Método de pago" descriptionPage="Agrega tu método de pago aquí">
      <PaymentMethodFormStyled>
        <Elements stripe={stripePromise}>
          <h1>Ingresa tu información de pago acontinuación:</h1>
          <PaymentMethodForm amount={amount} />
        </Elements>
      </PaymentMethodFormStyled>
    </ShopLayout>
  )
}

export default PaymentMethod;