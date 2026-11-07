export default function Spinner( { mensaje }) {
  return(
    <div className="spinner-contenedor">
      <div className="spinner"></div>
      <p className="spinner-mensaje">{ mensaje }</p>
    </div>
  );
}