import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { ProductList } from "../../../components";
import { TypeItemsProps } from "../../../interfaces";

const Container = styled.section`
  margin: 40px 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Title = styled.h2`
  cursor: pointer;
`;
const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  padding-top: 10px;
  cursor: pointer;
  strong {
    &:hover {
      border-bottom: 2px solid #606060;
      font-weight: bolder;
      transition: 0.1s ease border-bottom;
    }
  }
`;
const TypesItem: FC<TypeItemsProps> = ({ title, route, products }) => {

  const { type } = useRouter().query;

  return (
    <Container>
      <Link href={`${type}/${route}`}>
        <a>
          <Title>{title}</Title>
        </a>
      </Link>
      <ProductList products={products} />
      <Text>
        <Link href={`${type}/${route}`}>
          <a>
            <strong>Ver todos</strong>
          </a>
        </Link>
      </Text>
    </Container>
  );
};
export default TypesItem;
