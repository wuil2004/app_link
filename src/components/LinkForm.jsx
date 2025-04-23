// src/components/LinkForm.jsx
import { useState } from 'react';
import { useLinks } from '../context/LinksContext';

const LinkForm = () => {
  const { addLink } = useLinks();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [suggestedTitle, setSuggestedTitle] = useState('');

  // Función para sugerir un título basado en el link
  const suggestTitle = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain.split('.')[0];  // Extrae el dominio como título sugerido
    } catch (error) {
      return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link) {
      addLink(link, title || suggestedTitle, category);
      setLink('');
      setTitle('');
      setCategory('');
      setSuggestedTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={link}
        onChange={(e) => {
          const url = e.target.value;
          setLink(url);
          setSuggestedTitle(suggestTitle(url));  // Actualiza el título sugerido
        }}
        placeholder="Agrega un link"
        required
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={suggestedTitle || 'Título del link'}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Selecciona una categoría</option>
        <option value="Redes Sociales">Redes Sociales</option>
        <option value="Videos">Videos</option>
        <option value="Noticias">Noticias</option>
        <option value="Educación">Educación</option>
        <option value="Otros">Otros</option>
      </select>
      <button type="submit">Agregar Link</button>
    </form>
  );
};

export default LinkForm;
