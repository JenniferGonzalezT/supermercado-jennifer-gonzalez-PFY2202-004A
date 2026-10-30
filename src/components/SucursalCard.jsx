export default function SucursalCard({ nombre, direccion, estado, estadoClase }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all">
      <h5 className="text-xl font-bold text-color-oscuro mb-2">{nombre}</h5>
      <p className="text-gray-600 mb-4 flex-grow">{direccion}</p>
      <div className="mt-auto">
        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${estadoClase}`}>
          {estado}
        </span>
      </div>
    </div>
  );
}