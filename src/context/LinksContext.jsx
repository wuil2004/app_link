// src/context/LinksContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const LinksContext = createContext();

// Crear el provider
export const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('Todos'); // Filtro de categoría

  // Cargar los links del localStorage al iniciar la aplicación
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || [];
    setLinks(storedLinks);
  }, []);

  // Guardar los links en localStorage cada vez que cambien
  useEffect(() => {
    if (links.length > 0) {
      localStorage.setItem('links', JSON.stringify(links));  // Guarda los links en localStorage
    }
  }, [links]);

  // Función para agregar un nuevo link
  const addLink = (link, title, category) => {
    const newLink = { link, title, category };
    setLinks((prevLinks) => [...prevLinks, newLink]);
  };

  // Función para eliminar un link
  const removeLink = (index) => {
    setLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  // Filtrar los links según la categoría
  const filteredLinks = filter === 'Todos' ? links : links.filter(link => link.category === filter);

  return (
    <LinksContext.Provider value={{ links: filteredLinks, addLink, removeLink, setFilter }}>
      {children}
    </LinksContext.Provider>
  );
};

// Hook para usar el contexto
export const useLinks = () => useContext(LinksContext);
