const QuienesSomos = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Quiénes Somos</h2>
      <div className="row">
        <div className="col-md-8">
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
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nuestro Equipo</h5>
              <p className="card-text">Contamos con más de 5,000 colaboradores capacitados en control de calidad e inventario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;