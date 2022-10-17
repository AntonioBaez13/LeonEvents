import React from 'react';
import ReactDOM from 'react-dom/client';
import AddEvent from './AddEventModal';
import { Event } from './EventComponent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <AddEvent></AddEvent>
    </div>
  </React.StrictMode>
);
