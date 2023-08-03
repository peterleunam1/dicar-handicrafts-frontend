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
