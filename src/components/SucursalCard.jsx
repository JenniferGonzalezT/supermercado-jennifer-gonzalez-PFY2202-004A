export default function SucursalCard({ nombre, direccion, telefono, horario, imagen, estado, estadoClase }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden">
      {/* Imagen */}
      <img src={imagen} alt={`Fachada de ${nombre}`} className="w-full h-48 object-cover" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-color-oscuro mb-2">{nombre}</h5>
        
        {/* Datos de contacto y horario */}
        <div className="text-sm text-gray-600 mb-4 space-y-1 flex-grow">
          <p>📍 {direccion}</p>
          <p>📞 {telefono}</p>
          <p>🕒 {horario}</p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${estadoClase}`}>
            {estado}
          </span>
        </div>
      </div>
    </div>
  );
}