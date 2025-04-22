// src/components/LinkForm.jsx
import { useState } from 'react';
import { useLinks } from '../context/LinksContext';

const LinkForm = () => {
  const { addLink } = useLinks();
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link) {
      addLink(link);
      setLink('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Agrega un link"
        required
      />
      <button type="submit">Agregar Link</button>
    </form>
  );
};

export default LinkForm;
