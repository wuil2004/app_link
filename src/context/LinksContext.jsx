// src/context/LinksContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const LinksContext = createContext();

// Crear el provider
export const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('Todos'); // Filtro de categoría
  const [categories, setCategories] = useState(['Videos', 'Noticias', 'Redes Sociales', 'Educación', 'Otros']); // Categorías predeterminadas

  // Cargar los links y categorías desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || [];
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || categories;
    setLinks(storedLinks);
    setCategories(storedCategories);
  }, []);

  // Guardar los links y categorías en localStorage cada vez que cambien
  useEffect(() => {
    if (links.length > 0) {
      localStorage.setItem('links', JSON.stringify(links));  // Guarda los links en localStorage
    }
    if (categories.length > 0) {
      localStorage.setItem('categories', JSON.stringify(categories));  // Guarda las categorías en localStorage
    }
  }, [links, categories]);

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

  // Función para agregar una categoría personalizada
  const addCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories((prevCategories) => [...prevCategories, category]);
    } else {
      alert("La categoría ya existe.");
    }
  };

  // Función para eliminar una categoría personalizada
  const removeCategory = (category) => {
    setCategories((prevCategories) => prevCategories.filter(c => c !== category));
  };

  return (
    <LinksContext.Provider value={{ 
      links: filteredLinks, 
      addLink, 
      removeLink, 
      setFilter, 
      categories, 
      addCategory, 
      removeCategory 
    }}>
      {children}
    </LinksContext.Provider>
  );
};

// Hook para usar el contexto
export const useLinks = () => useContext(LinksContext);
