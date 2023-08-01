import {useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  Banner,
  FilterCategories,
  ProductList,
  ShopLayout,
  Skeleton,
} from "../../../components";
import {
  getBannerImage,
  getFilterProducts,
  toCapitalize,
} from "../../../helpers";
import { BannerOptions } from "../../../interfaces";
import useProducts from "../../../hooks/useProducts";

const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 35px;
  @media (max-width: 500px) {
  }
`;
const HeaderFilter = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const FilterOptions = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 10px;
    overflow: scroll;
  }
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  p {
    margin-left: 10px;
  }
`;

const FilterOption = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #e8e8e8;
  box-shadow: ${(props) => props.theme.bshadow};
  backdrop-filter: blur(12px);
  border-radius: 3px 3px 0px 0px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s ease background-color, 0.3s ease color;
  padding: 2px 25px;
  height: 22px;
  background-color: ${(props) =>
    props.isActive ? "#f6d1bc" : props.theme.card};
  font-weight: ${(props) => (props.isActive ? "600" : "normal")};
  &:hover {
    background-color: #f6d1bc;
    font-weight: 600;
  }
  @media (max-width: 500px) {
    margin-bottom: 5px;
  }
`;
const ProductsContainer = styled.div`
  border-top: 2px solid #e8e8e8;
  width: 100%;
  @media (max-width: 500px) {
    border: none;
  }
`;
const ProductType: NextPage = () => {
  const { type: category } = useRouter().query as { type: string };
  const [filter, setFilter] = useState<string>("todas");
  const { products, loading } = useProducts({ category });
  const filteredProducts = getFilterProducts({ products, filter });
 

  return (
    <ShopLayout
      title={toCapitalize(`${category}`)}
      descriptionPage={`${category} de tipo artesanal de gran calidad`}
    >
      <Banner
        title={toCapitalize(`${category}`)}
        image={getBannerImage(category as BannerOptions)}
      />
      <FilterContainer>
        <FilterCategories category={category} filter={filter} setFilter={setFilter}/>
        <ProductsContainer>
          {loading && <Skeleton />}
          <ProductList products={filteredProducts} />
        </ProductsContainer>
      </FilterContainer>
    </ShopLayout>
  );
};

export default ProductType;
