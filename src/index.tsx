import React from 'react';
import ReactDOM from 'react-dom/client';
import { Event } from './EventComponent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Event></Event>
    </div>
  </React.StrictMode>
);
