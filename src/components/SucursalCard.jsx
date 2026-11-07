export default function SucursalCard({ sucursal }) {
  // Diccionario que asigna los colores según el estado que venga del JSON
  const getEstadoClases = (estado) => {
    const clases = {
      "Inventario Actualizado": "bg-green-100 text-green-800",
      "Sin Stock": "bg-red-100 text-red-800",
      "Revisión de Stock Pendiente": "bg-yellow-100 text-yellow-800"
    };
    
    // Retorna los colores correspondientes, o un gris neutro por defecto si hay un estado nuevo
    return clases[estado] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden">
      {/* Imagen */}
      <img src={sucursal.imagen} alt={`Fachada de ${sucursal.nombre}`} className="w-full h-48 object-cover" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-color-oscuro mb-2">{sucursal.nombre}</h5>
        
        {/* Datos de contacto y horario */}
        <div className="text-sm text-gray-600 mb-4 space-y-1 flex-grow">
          <p>📍 {sucursal.direccion}</p>
          <p>📞 {sucursal.telefono}</p>
          <p>🕒 {sucursal.horario}</p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getEstadoClases(sucursal.estado)}`}>
            {sucursal.estado}
          </span>
        </div>
      </div>
    </div>
  );
}