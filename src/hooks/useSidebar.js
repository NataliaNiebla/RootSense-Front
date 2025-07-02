import { useContext } from 'react';
import SidebarContext from '../context/SidebarContext';

// Hook personalizado para usar el contexto
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar debe ser usado dentro de SidebarProvider');
  }
  return context;
};
