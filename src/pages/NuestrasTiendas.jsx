export default function NuestrasTiendas() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 mb-12">
      <h2 className="text-3xl font-bold text-color-oscuro mb-4">Nuestras Tiendas</h2>
      <p className="text-lg text-gray-600 mb-8">
        Conoce las ubicaciones de nuestras principales sucursales y centros de distribución:
      </p>
      
      {/* Grilla responsiva: 1 columna en celulares, 3 columnas en pantallas medianas/grandes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all">
          <h5 className="text-xl font-bold text-color-oscuro mb-2">Sucursal Central</h5>
          <p className="text-gray-600 mb-4 flex-grow">Av. Principal 123, Santiago.</p>
          <div className="mt-auto">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Inventario Actualizado
            </span>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all">
          <h5 className="text-xl font-bold text-color-oscuro mb-2">Sucursal Norte</h5>
          <p className="text-gray-600 mb-4 flex-grow">Av. Los Héroes 456, Antofagasta.</p>
          <div className="mt-auto">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
              Revisión de Stock Pendiente
            </span>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all">
          <h5 className="text-xl font-bold text-color-oscuro mb-2">Sucursal Sur</h5>
          <p className="text-gray-600 mb-4 flex-grow">Calle Las Rosas 789, Concepción.</p>
          <div className="mt-auto">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Inventario Actualizado
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}