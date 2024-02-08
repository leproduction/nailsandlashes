import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoPages from './NoPage';
import DownloadLinkPage from './DownloadPage';

const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} ></Route>
          <Route  path="/home" element={<Home />} />
          <Route  path="/download" element={<DownloadLinkPage />} />
          <Route  path="*" element={<NoPages />} />
        </Routes>
      </BrowserRouter>

  );
};

export default App;
