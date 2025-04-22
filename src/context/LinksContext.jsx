// src/context/LinksContext.jsx
import { createContext, useState, useContext } from 'react';

// Crear el contexto
const LinksContext = createContext();

// Crear el provider
export const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  // Función para agregar un nuevo link
  const addLink = (link) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  // Función para eliminar un link
  const removeLink = (index) => {
    setLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  return (
    <LinksContext.Provider value={{ links, addLink, removeLink }}>
      {children}
    </LinksContext.Provider>
  );
};

// Hook para usar el contexto
export const useLinks = () => useContext(LinksContext);
