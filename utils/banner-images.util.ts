import { BannerOptions } from "../interfaces";

export const bannerImages: Record<BannerOptions, string> = {
    "mochilas": "https://i.imgur.com/pX5Y8up.jpeg",
    "sandalias": "https://i.imgur.com/lt0lLxf.jpeg",
    "sombreros": "https://i.imgur.com/iEPDiSJ.jpeg",
    "accesorios": "https://i.imgur.com/ui9Nhsd.jpeg"
}

export function getBannerImage(title: BannerOptions): string {
    return bannerImages[title];
}