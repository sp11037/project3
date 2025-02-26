import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import ToDoPage from './ToDoPage';
import ContactPage from './ContactPage';
import NoPage from './NoPage';
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
