import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import ToDoPage from './components/ToDoPage';
import ContactPage from './components/ContactPage';
import NoPage from './components/NoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToDoPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
