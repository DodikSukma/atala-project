import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MediaViewer from './pages/MediaViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MediaViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
