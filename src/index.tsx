import React from 'react';
import ReactDOM from 'react-dom/client';
import AddEvent from './AddEventModal';
import { Event } from './EventComponent';
import EventInfoPanel from './InfoSidePanel';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <EventInfoPanel></EventInfoPanel>
    </div>
  </React.StrictMode>
);
