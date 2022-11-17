export const toSubcategories = (tipo: any = "") => {
  let options;
  switch (tipo) {
    case "mochilas":
      options = [
        {
          id: 1,
          name: "arhuaca",
        },
        {
          id: 2,
          name: "wayuu",
        },
        {
          id: 1,
          name: "kankuama",
        },
        {
          id: 1,
          name: "iraca",
        },
      ];
      break;
    case "sandalias":
      options = [
        {
          id: 1,
          name: "plataforma",
        },
        {
          id: 2,
          name: "wayuu",
        },
      ];

      break;
    case "sombreros":
      // product = products_sombreros;
      options = [
        {
          id: 1,
          name: "decorado",
        },
        {
          id: 2,
          name: "wayuu",
        },
      ];
      break;
    case "accesorios":
      options = [
        {
          id: 1,
          name: "arete",
        },
        {
          id: 2,
          name: "manilla",
        },
        {
          id: 1,
          name: "pulsera",
        },
        {
          id: 1,
          name: "otro",
        },
      ];
      break;
    default:
      break;
  }
  return options;
};
