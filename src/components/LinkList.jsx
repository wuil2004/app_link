// src/components/LinkList.jsx
import { useLinks } from '../context/LinksContext';

const LinkList = () => {
  const { links, removeLink, setFilter, categories, removeCategory } = useLinks();

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Cambiar el filtro según la categoría seleccionada
  };

  return (
    <div>
      <h2>Links Compartidos</h2>

      {/* Filtro de Categoría */}
      <select onChange={handleFilterChange}>
        <option value="Todos">Todos</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* Eliminar Categoría */}
      <h3>Categorías</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category} 
            <button onClick={() => removeCategory(category)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <ul>
        {links.length === 0 ? (
          <p>No hay links para mostrar</p>
        ) : (
          links.map((link, index) => (
            <li key={index}>
              <h3>{link.title}</h3>
              <p>Categoría: {link.category}</p>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </a>
              <div>
                <button onClick={() => removeLink(index)}>Eliminar</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LinkList;
