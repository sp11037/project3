import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ToDoPage from './components/ToDoPage/ToDoPage';
import ContactPage from './components/ContactPage';
import NoPage from './components/NoPage';

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
