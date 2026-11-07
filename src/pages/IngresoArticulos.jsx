import { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { useNavigate } from 'react-router';
import { validarNuevoArticulo, TIPOS_PERMITIDOS } from '../util/validators';
import { ACTIONS } from '../reducers/inventoryReducer';

export default function IngresoArticulos() {
  const { inventoryDispatch } = useInventory();
  const navigate = useNavigate();

  // Estados locales para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState(10);

  // Estados para alertas visuales de seguridad
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar alertas previas
    setError('');
    setExito(false);
    
    // Ejecutar validación de seguridad
    const validacion = validarNuevoArticulo(nombre, marca, tipo, stock);

    if (!validacion.esValido) {
      setError(validacion.mensaje);
      return;
    }

    // Construir el objeto completo
    const nuevoProducto = {
      id: crypto.randomUUID(),
      isNew: true,
      nombre: nombre.trim(), 
      marca: marca.trim(), 
      tipo,
      stock
    };

    inventoryDispatch({ type: ACTIONS.ADD_PRODUCT, payload: nuevoProducto });

    // Mostrar éxito y resetear formulario
    setExito(true);
    setNombre('');
    setMarca('');
    setTipo('');
    setStock(10);

    // Redirigir a la tabla después de 2.5 segundos para ver mensaje
    setTimeout(() => {
      navigate('/inventario');
    }, 2500);
  };

  return (
    <div className="page-container">
      <div className="max-w-md card-container">
        <h2 className="text-2xl font-bold text-center text-color-oscuro mb-6">Ingreso de Nuevo Artículo</h2>
        
        {/* Alerta de Error */}
        {error && (
          <div className="alerta-form bg-red-50 border-red-500 text-red-700">
            {error}
          </div>
        )}

        {/* Alerta de Éxito */}
        {exito && (
          <div className="alerta-form bg-green-50 border-green-500 text-green-700">
            ¡Artículo agregado! Redirigiendo a inventario...
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="label-form">Nombre del Producto</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="input-form"
              placeholder="Ej. Arroz Grado 1"
              required
            />
          </div>

          <div>
            <label className="label-form">Marca</label>
            <input 
              type="text" 
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="input-form"
              placeholder="Ej. Tucapel"
              required
            />
          </div>

          <div>
            <label className="label-form">Stock Inicial</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="input-form"
              min="0"
              required
            />
          </div>

          <div>
            <label className="label-form">Tipo de Producto</label>
            <select 
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="input-form"
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
            className="btn-primario"
          >
            Agregar al Inventario
          </button>
        </form>
      </div>
    </div>
  );
}