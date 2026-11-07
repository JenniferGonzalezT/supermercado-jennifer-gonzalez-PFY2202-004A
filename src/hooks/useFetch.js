import { useState, useEffect } from 'react';

export function useFetch(url, options = {}) {
  // Estados que controlan el ciclo de vida de la petición
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intentos, setIntentos] = useState(0);

  // Función para forzar un reintento manual
  const reintentar = () => {
    setCargando(true);
    setError(null);
    setIntentos((prev) => prev + 1);
  };

  useEffect(() => {
    // AbortController para prevenir memory leaks
    const controlador = new AbortController();

    fetch(url, { ...options, signal: controlador.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con el servidor');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setCargando(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setCargando(false);
        }
      });

    // Cleanup function
    return () => controlador.abort();
  }, [url, intentos]); // Se re-ejecuta si cambia la URL o el usuario presiona reintentar

  // Retornar los datos para que cualquier componente los pueda usar
  return { data, cargando, error, reintentar };
}