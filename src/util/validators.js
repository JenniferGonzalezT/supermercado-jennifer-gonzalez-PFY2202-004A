export const esSucursalValida = (sucursal) => {
  // Validar que el objeto exista y que cada propiedad tenga el tipo de dato exacto esperado
  return (
    sucursal &&
    typeof sucursal.id === 'number' &&
    typeof sucursal.nombre === 'string' &&
    typeof sucursal.direccion === 'string' &&
    typeof sucursal.estado === 'string' &&
    typeof sucursal.estadoClase === 'string'
  );
};