interface Category {
  id: number;
  name: string;
  href: string;
  icon: string;
}


export const categories: Category[] = [
  {
    id: 1,
    name: "mochilas",
    href: "/productos/mochilas",
    icon: "fa-solid fa-bag-shopping",
  },
  {
    id: 2,
    name: "sandalias",
    href: "/productos/sandalias",
    icon: "fa-solid fa-shoe-prints",
  },
  {
    id: 3,
    name: "sombreros",
    href: "/productos/sombreros",
    icon: "fa-brands fa-redhat",
  },
  {
    id: 4,
    name: "accesorios",
    href: "/productos/accesorios",
    icon: "fa-solid fa-wand-sparkles",
  },
];
