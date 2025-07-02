import { useState, useEffect } from 'react';

// Hook personalizado para manejar el estado de las páginas
export const usePage = (initialTitle = '') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageTitle, setPageTitle] = useState(initialTitle);

  // Función para simular carga de datos
  const fetchData = async (fetchFunction) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction();
      return result;
    } catch (err) {
      setError(err.message || 'Error al cargar datos');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Efecto para actualizar el título de la página
  useEffect(() => {
    if (pageTitle) {
      document.title = `RootSense - ${pageTitle}`;
    }
  }, [pageTitle]);

  return {
    loading,
    error,
    pageTitle,
    setPageTitle,
    setLoading,
    setError,
    fetchData
  };
};
