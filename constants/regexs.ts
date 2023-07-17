export const regexs = {
  email: {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Por favor ingrese un correo válido",
  },
  fullName: {
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    message: "Por favor ingrese un nombre válido",
  },
  phone: {
    regex: /^[0-9]{10}$/,
    message: "Por favor ingrese un número de teléfono válido",
  },
  address: {
    regex: /^[a-zA-Z0-9\s,'-]*$/,
    message: "Por favor ingrese una dirección válida",
  },
  referencePoint: {
    regex: /^[a-zA-Z0-9\s,'-]*$/,
    message: "Por favor ingrese un punto de referencia válido",
  },
};
