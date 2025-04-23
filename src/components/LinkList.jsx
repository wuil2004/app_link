// src/components/LinkList.jsx
import { useLinks } from '../context/LinksContext';

const LinkList = () => {
  const { links, removeLink, setFilter } = useLinks();

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Cambiar el filtro según la categoría seleccionada
  };

  return (
    <div>
      <h2>Links Compartidos</h2>

      {/* Filtro de Categoría */}
      <select onChange={handleFilterChange}>
        <option value="Todos">Todos</option>
        <option value="Videos">Videos</option>
        <option value="Noticias">Noticias</option>
        <option value="Redes Sociales">Redes Sociales</option>
        <option value="Educación">Educación</option>
        <option value="Otros">Otros</option>
      </select>

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
              <button onClick={() => removeLink(index)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LinkList;
