import { FC } from "react";
import styled from "styled-components";
import { products_mochilas } from "../../../helpers";
import { SelectProps } from "../../../interfaces";


const Select:FC<SelectProps> = ({onChange, array, name}) => {
    return(
        <select name={name} onChange={onChange}>
            {
                products_mochilas.map(({name, id})=>{
                    return(
                        <option value={name} key={id}>
                            {name}
                        </option>
                    )
                })
            }
        </select>
    )
}
export default Select