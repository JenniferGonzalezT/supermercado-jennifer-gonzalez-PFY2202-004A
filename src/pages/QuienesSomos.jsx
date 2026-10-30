export default function QuienesSomos() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 mb-12">
      <h2 className="text-3xl font-bold text-color-oscuro mb-6">Quiénes Somos</h2>
      
      {/* Grilla: 1 columna en móviles, 3 columnas en pantallas medianas/grandes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Ocupa 2 de las 3 columnas disponibles */}
        <div className="md:col-span-2 space-y-4 text-lg text-gray-600">
          <p>
            Somos una cadena de supermercados líder en el país, comprometida con entregar
            productos de la más alta calidad a las familias. Nuestro sistema de gestión de
            inventario nos permite asegurar que nuestras góndolas siempre estén abastecidas.
          </p>
          <p>
            Nuestra misión es ofrecer frescura, precios justos y un servicio de excelencia
            gracias a nuestra eficiente logística interna.
          </p>
        </div>
        
        {/* Ocupa 1 de las 3 columnas disponibles (Tarjeta lateral) */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 h-full border-t-4 border-acento-verdoso">
            <h5 className="text-xl font-bold text-color-oscuro mb-3">Nuestro Equipo</h5>
            <p className="text-gray-600">
              Contamos con más de 5.000 colaboradores capacitados en control de calidad e inventario.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}