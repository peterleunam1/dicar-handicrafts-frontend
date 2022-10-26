import { NextPage } from "next";
import { useRouter } from "next/router";
import { Banner, ShopLayout, TypesItem } from "../../../components";
import { getBannerImage, toCapitalize } from "../../../helpers";
import { BannerOptions } from "../../../interfaces";
import { products_mochilas } from "../../../helpers";

const Mochilas: NextPage = () => {

    const { type } = useRouter().query;

    return (
        <ShopLayout title={toCapitalize(`${type}`)} descriptionPage="Mejores mochilas artesanales de la ciudad">
            <Banner title={toCapitalize(`${type}`)} image={getBannerImage(type as BannerOptions)} />
            <TypesItem title="Mochilas Wayuu >" route="wayuu" products={products_mochilas.slice(0, 5)} />
            <TypesItem title="Mochilas Ahruaco >" route="ahruaco" products={products_mochilas.slice(6, 11)} />
            <TypesItem title="Mochilas Jiraca >" route="jiraca" products={products_mochilas.slice(11, 16)} />
        </ShopLayout>
    )
}

export default Mochilas 