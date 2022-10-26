import { NextPage } from "next";
import Link from "next/link";

import { Banner, Product, ProductList, ShopLayout, TypesItem } from "../../components";
import BannerMochilas from "../../public/assets/banner-mochilas.png"

const Mochilas:NextPage = () => {
    return(
        <ShopLayout title="Mochilas" descriptionPage="Mejores mochilas artesanales de la ciudad">
            <Banner title="mochilas" image="https://i.imgur.com/pX5Y8up.jpeg"/>
            <TypesItem title="Mochilas Wayuu >"/>
            <TypesItem title="Mochilas Ahruaco >"/>
            <TypesItem title="Mochilas Jiraca >"/>
        </ShopLayout>
    )
}
export default Mochilas 