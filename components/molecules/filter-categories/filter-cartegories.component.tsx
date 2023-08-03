import { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icon/icon.component";
import { toCapitalize, toSubcategories } from "../../../utils";

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

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  p {
    margin-left: 10px;
  }
`;

interface FilterCartegoriesProps {
    category: string
    filter: string
    setFilter: (filter: string) => void
}
const FilterCartegories: FC<FilterCartegoriesProps> = ({category, filter, setFilter}) => {
    const options = toSubcategories(category);


  return (
    <HeaderFilter>
      <Text>
        <Icon fill="fa-solid fa-arrow-down-wide-short" margin="0px" />
        <p>Filtrar las opciones</p>{" "}
      </Text>
      <FilterOptions>
        <FilterOption
          isActive={filter === "todas"}
          onClick={() => setFilter("todas")}
        >
          Todas
        </FilterOption>
        {options?.map(({ name, id }) => {
          return (
            <FilterOption
              key={id}
              isActive={filter === name}
              onClick={() => {
                setFilter(name);
              }}
            >
              {`${toCapitalize(name)}s`}
            </FilterOption>
          );
        })}
      </FilterOptions>
    </HeaderFilter>
  );
};
export default FilterCartegories;
