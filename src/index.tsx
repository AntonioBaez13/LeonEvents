import React from 'react';
import ReactDOM from 'react-dom/client';
import AddEvent from './AddEventModal';
import DatesList from './DateHolderComponent';
import { Event } from './EventComponent';
import EventInfoPanel from './InfoSidePanel';
import MainContent from './PageContent';
import TopBar from './TopBar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <TopBar></TopBar>
      <MainContent></MainContent>
  </React.StrictMode>
);
