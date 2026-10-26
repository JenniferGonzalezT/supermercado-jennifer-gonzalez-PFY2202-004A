const NuestrasTiendas = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nuestras Tiendas</h2>
      <p>Conoce las ubicaciones de nuestras principales sucursales y centros de distribución:</p>
      
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Sucursal Central</h5>
              <p className="card-text">Av. Principal 123, Santiago.</p>
              <span className="badge bg-success">Inventario Actualizado</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Sucursal Norte</h5>
              <p className="card-text">Av. Los Héroes 456, Antofagasta.</p>
              <span className="badge bg-warning text-dark">Revisión de Stock Pendiente</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Sucursal Sur</h5>
              <p className="card-text">Calle Las Rosas 789, Concepción.</p>
              <span className="badge bg-success">Inventario Actualizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrasTiendas;