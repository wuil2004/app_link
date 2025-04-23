// src/components/LinkList.jsx
import { useLinks } from '../context/LinksContext';

const LinkList = () => {
  const { links, removeLink, setFilter } = useLinks();

  // Función para copiar al portapapeles
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copiado al portapapeles!");
    });
  };

  // Función para compartir en WhatsApp
  const shareOnWhatsApp = (link) => {
    const message = `Mira este link: ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
              <div>
                {/* Botón para copiar al portapapeles */}
                <button onClick={() => copyToClipboard(link.link)}>Copiar Link</button>

                {/* Botón para compartir en WhatsApp */}
                <button onClick={() => shareOnWhatsApp(link.link)}>Compartir en WhatsApp</button>

                {/* Botón para eliminar */}
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
