// src/components/LinkForm.jsx
import { useState } from 'react';
import { useLinks } from '../context/LinksContext';

const LinkForm = () => {
  const { addLink, categories, addCategory } = useLinks();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');  // Para la nueva categoría

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link && category) {
      addLink(link, title || 'Sin título', category);
      setLink('');
      setTitle('');
      setCategory('');
    }
  };

  const handleAddCategory = () => {
    if (newCategory) {
      addCategory(newCategory);
      setNewCategory('');  // Limpiar el campo de nueva categoría
    } else {
      alert("Por favor ingresa una categoría.");
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
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del link"
      />
      {/* Seleccionar categoría */}
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Selecciona una categoría</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* Opción para agregar una nueva categoría */}
      <div>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Nueva categoría"
        />
        <button type="button" onClick={handleAddCategory}>Agregar Categoría</button>
      </div>

      <button type="submit">Agregar Link</button>
    </form>
  );
};

export default LinkForm;
