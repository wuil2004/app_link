// src/components/LinkList.jsx
import { useLinks } from '../context/LinksContext';

const LinkList = () => {
  const { links, removeLink } = useLinks();

  return (
    <div>
      <h2>Links Compartidos</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <h3>{link.title}</h3>
            <p>Categoría: {link.category}</p>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.link}
            </a>
            <button onClick={() => removeLink(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
