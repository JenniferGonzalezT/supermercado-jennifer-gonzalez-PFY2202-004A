const Home = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 text-center bg-light rounded-3">
        <h1 className="display-4">Gestión de Inventario</h1>
        <p className="lead">Bienvenido al sistema central de inventario del Supermercado.</p>
        <hr className="my-4" />
        <p>Desde aquí podrás administrar los productos, revisar el stock y control de todas nuestras sucursales.</p>
        <button className="btn btn-primary btn-lg">Revisar Stock Actual</button>
      </div>
    </div>
  );
};

export default Home;