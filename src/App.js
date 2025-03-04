import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ToDoPage from './components/ToDoPage/ToDoPage';
import ContactPage from './components/ContactPage/ContactPage';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project3/" element={<Layout />}>
          <Route index element={<ToDoPage />} />
          <Route path="/project3/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
