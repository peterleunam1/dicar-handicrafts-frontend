import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Banner, Icon, ProductList, ShopLayout } from "../../../components";
import {
  getBannerImage,
  toCapitalize,
  toSubcategories,
} from "../../../helpers";
import { BannerOptions, IProduct } from "../../../interfaces";
import useProducts from "../../../hooks/useProducts";

const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 35px;
`;
const HeaderFilter = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterOptions = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  box-shadow: 0px 0px 6px rgba(232, 232, 232, 0.76);
  backdrop-filter: blur(12px);
  border-radius: 3px 3px 0px 0px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s ease background-color, 0.3s ease color;
  padding: 2px 25px;
  height: 22px;
  background-color: ${(props) =>
    props.isActive ? "#f6d1bc" : "rgba(253, 253, 253, .79)"};
  font-weight: ${(props) => props.isActive ? '600' : 'normal'};
  &:hover {
    background-color: #f6d1bc;
    font-weight: 600;
  }
`;
const ProductsContainer = styled.div`
  border-top: 2px solid #e8e8e8;
  width: 100%;
`;
const ProductType: NextPage = () => {
  const { type } = useRouter().query;
  const [productsFiltered, setProductsFiltered] = useState<Array<IProduct>>([]);
  const [filterActive, setFilterActive] = useState('todas');
  const { products } = useProducts(type);
  const options = toSubcategories(type);

  useEffect(() => {
    setFilterActive('todas');
  }, [type])

  const handleClick = (name: string) => {
    const filtered = products.filter((x: IProduct) => x.type === name);
    setProductsFiltered(filtered);
    setFilterActive(name);
  };

  return (
    <ShopLayout
      title={toCapitalize(`${type}`)}
      descriptionPage={`${type} de tipo artesanal de gran calidad`}
    >
      <Banner
        title={toCapitalize(`${type}`)}
        image={getBannerImage(type as BannerOptions)}
      />

      <FilterContainer>
        <HeaderFilter>
          <Text>
            {" "}
            <Icon fill="fa-solid fa-arrow-down-wide-short" margin="0px" />
            <p>Filtrar las opciones</p>{" "}
          </Text>
          <FilterOptions>
            <FilterOption isActive={filterActive === 'todas'} onClick={() => setFilterActive('todas')}>
              Todas
            </FilterOption>
            {options?.map(({ name, id }) => {
              return (
                <FilterOption
                  isActive={filterActive === name}
                  onClick={() => {
                    handleClick(name);
                  }}
                  key={id}
                >
                  {`${toCapitalize(name)}s`}
                </FilterOption>
              );
            })}
          </FilterOptions>
        </HeaderFilter>
        <ProductsContainer>
          {filterActive === 'todas' ? (
            <ProductList products={products} />
          ) : (
            <ProductList products={productsFiltered} />
          )}
        </ProductsContainer>
      </FilterContainer>
    </ShopLayout>
  );
};

export default ProductType;
