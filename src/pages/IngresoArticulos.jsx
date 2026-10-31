import { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';
import { validarNuevoArticulo, TIPOS_PERMITIDOS } from '../util/validators';

export default function IngresoArticulos() {
  const { addProduct } = useContext(InventoryContext);
  const navigate = useNavigate();

  // Estados locales para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');

  // Estados para alertas visuales de seguridad
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar alertas previas
    setError('');
    setExito(false);
    
    // Ejecutar validación de seguridad
    const validacion = validarNuevoArticulo(nombre, marca, tipo);

    if (!validacion.esValido) {
      setError(validacion.mensaje);
      return;
    }

    // Si pasa la validación, enviamos los datos limpios al estado global
    addProduct({ 
      nombre: nombre.trim(), 
      marca: marca.trim(), 
      tipo 
    });

    // Mostrar éxito y resetear formulario
    setExito(true);
    setNombre('');
    setMarca('');
    setTipo('');

    // Redirigir a la tabla después de 2.5 segundos para ver mensaje
    setTimeout(() => {
      navigate('/inventario');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-fondo-claro py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h2 className="text-2xl font-bold text-center text-texto-oscuro mb-6">Ingreso de Nuevo Artículo</h2>
        
        {/* Alerta de Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-md">
            {error}
          </div>
        )}

        {/* Alerta de Éxito */}
        {exito && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm font-medium rounded-r-md">
            ¡Artículo agregado! Redirigiendo a inventario...
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              placeholder="Ej. Arroz Grado 1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Marca</label>
            <input 
              type="text" 
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              placeholder="Ej. Tucapel"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Producto</label>
            <select 
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              required
            >
              <option value="">Seleccione un tipo...</option>
              {TIPOS_PERMITIDOS.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-acento-verdoso hover:bg-acento-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-acento-verdoso transition-colors"
          >
            Agregar al Inventario
          </button>
        </form>
      </div>
    </div>
  );
}