import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import Dashboard from './pages/dashboard/Dashboard.jsx';
import BarChart from './pages/barChart/BarChart.jsx';
import LineChart from './pages/lineChart/LineChart.jsx';
import PieChart from './pages/pieChart/PieChart.jsx';
import Form from './pages/form/Form.jsx';
import Team from './pages/team/Team.jsx';
import Geography from './pages/geography/Geography.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Faq from './pages/faq/Faq.jsx';
import Contact from './pages/contact/Contact.jsx';
import Calendar from './pages/calendar/Calendar.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='bar' element={<BarChart/>}/>

      <Route path='line' element={<LineChart/>}/>
      <Route path='pie' element={<PieChart/>}/>
      <Route path='form' element={<Form/>}/>
      <Route path='Team' element={<Team/>}/>
      <Route path='geography' element={<Geography/>}/>
      <Route path='Recepi' element={<Invoices/>}/>
      <Route path='faq' element={<Faq/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='calendar' element={<Calendar/>}/>

      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);