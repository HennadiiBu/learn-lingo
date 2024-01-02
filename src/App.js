import { Route, Routes } from 'react-router-dom';
import { appRouts } from './components/config/routes';
import { Suspense } from 'react';

import Header from './components/Header/Header.jsx'
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <>
              {appRouts.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </>
            <>
              <Route path="*" element={<div>404 Page not found</div>} />
            </>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
