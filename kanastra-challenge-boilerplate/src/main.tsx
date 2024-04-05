import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'; 
import { FileProvider } from '../src/components/ui/file';
import { Router } from '../router';
import { persistor } from '../src/components/ui/file'; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FileProvider>
        <PersistGate persistor={persistor} loading={null}>
          <Router />
        </PersistGate>
      </FileProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
