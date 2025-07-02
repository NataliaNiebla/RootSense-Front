import React, { createContext, useState } from 'react';

// Crear el contexto
const SidebarContext = createContext();

// Provider del contexto
export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  const value = {
    collapsed,
    setCollapsed,
    toggleSidebar
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
