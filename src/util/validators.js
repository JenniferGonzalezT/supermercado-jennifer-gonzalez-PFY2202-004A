export const esSucursalValida = (sucursal) => {
  // Validar que el objeto exista y que cada propiedad tenga el tipo de dato exacto esperado
  return (
    sucursal &&
    typeof sucursal.id === 'number' &&
    typeof sucursal.nombre === 'string' &&
    typeof sucursal.direccion === 'string' &&
    typeof sucursal.telefono === 'string' &&
    typeof sucursal.horario === 'string' &&
    typeof sucursal.imagen === 'string' &&
    typeof sucursal.estado === 'string' &&
    typeof sucursal.estadoClase === 'string'
  );
};

export const TIPOS_PERMITIDOS = ["Abarrotes", "Lácteos", "Bebidas", "Limpieza", "Congelados"];

export const validarNuevoArticulo = (nombre, marca, tipo) => {
  const nombreLimpio = nombre.trim();
  const marcaLimpia = marca.trim();

  // Evitar campos vacíos o solo con espacios
  if (!nombreLimpio || !marcaLimpia || !tipo) {
    return { esValido: false, mensaje: "Todos los campos son obligatorios y no pueden estar vacíos." };
  }

  // Limitar longitudes para prevenir desbordamientos
  if (nombreLimpio.length < 3 || nombreLimpio.length > 50) {
    return { esValido: false, mensaje: "El nombre debe tener entre 3 y 50 caracteres." };
  }
  
  if (marcaLimpia.length < 2 || marcaLimpia.length > 30) {
    return { esValido: false, mensaje: "La marca debe tener entre 2 y 30 caracteres." };
  }

  // Solo permitir caracteres válidos (letras, números, espacios, y guiones)
  const regexSeguridad = /^[a-zA-Z0-9\s-ñÑáéíóúÁÉÍÓÚ]+$/;
  if (!regexSeguridad.test(nombreLimpio) || !regexSeguridad.test(marcaLimpia)) {
    return { esValido: false, mensaje: "No se permiten caracteres especiales o símbolos (como <, >, script, $, %)." };
  }

  // Validar que el tipo seleccionado sea uno de los permitidos
  if (!TIPOS_PERMITIDOS.includes(tipo)) {
    return { esValido: false, mensaje: "El tipo de producto seleccionado no es válido." };
  }

  return { esValido: true, mensaje: "" };
};