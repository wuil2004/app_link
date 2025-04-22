// src/App.jsx
import { LinksProvider } from './context/LinksContext';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

const App = () => {
  return (
    <LinksProvider>
      <div>
        <h1>Aplicación de Links Compartidos</h1>
        <LinkForm />
        <LinkList />
      </div>
    </LinksProvider>
  );
};

export default App;
