import { AboutModel, CartModel, SocialMediaIcons } from "../interfaces";

export const about: AboutModel = {
  title: "Contácto",
  contact: "+57 300 7529260.",
  description: "Centro Comercial Parque Heredia Local 154 Cartagena de Indias.",
  copyright:
    " Copyright © 2021 Artesanias Dicar . Todos los derechos reservados.",
};

export const cart: CartModel = {
  title: "carrito de compras - artesanías dicar",
  empty: "No hay productos en el carrito",
  total: "Total",
  subtotal: "Subtotal",
  shipping: "Envío",
  price: "Precio",
  unit_price: "Precio unitario",
};

export const socialMediaIcons: SocialMediaIcons[] = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    hover: "#C13584",
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    hover: "#229ED9",
  },
  {
    name: "Whatsapp",
    icon: "fa-brands fa-whatsapp",
    hover: "#25D366",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    hover: "#2f477a",
  },
];

export const textToHandleCart = (text: string) => {
  text = text.toLowerCase();
  return {
    add: `Añadir ${text} al carrito`,
    updateQuantity: `El producto ${text} ya se
    encuentra en el carrito.
    ¿Desea agregar otro?`,
    remove: "¿Estás seguro que deseas eliminar este producto?",
    cart: "Agregar al carrito",
    buy: "Compra rápida",
    other: "Añadir otro al carrito",
  };
};
