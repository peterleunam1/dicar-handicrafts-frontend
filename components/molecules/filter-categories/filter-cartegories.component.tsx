import { FC } from "react";
import { Icon } from "../../../components";
import { toCapitalize, toSubcategories } from "../../../utils";
import { FilterCartegoriesProps } from "../../../interfaces";
import {
  HeaderFilter,
  Text,
  FilterOption,
  FilterOptions,
} from "./filter-categories.styled";

const FilterCartegories: FC<FilterCartegoriesProps> = ({
  category,
  filter,
  setFilter,
}) => {
  const options = toSubcategories(category);

  return (
    <HeaderFilter>
      <Text>
        <Icon fill="fa-solid fa-arrow-down-wide-short" margin="0" />
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
