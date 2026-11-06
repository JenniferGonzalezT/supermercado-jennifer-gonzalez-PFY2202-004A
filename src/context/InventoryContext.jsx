import { createContext, useContext } from 'react';

// Exportar la variable del contexto global
export const InventoryContext = createContext();

// Custom hook para consumir el contexto fácilmente
export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory debe ser usado dentro de un InventoryProvider");
  }
  return context;
};