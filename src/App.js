import React, { useState } from 'react';
import './App.css';
import Semanal from './pages/Semanal';
import Participacion from './pages/Participacion';
import Ocupacion from './pages/Ocupacion';
import Actividades from './pages/Actividades';
import { Link, Route } from 'wouter';

const RUTAS = [
  { path: '/semanal', name: 'Semanal', component: Semanal },
  { path: '/participacion', name: 'Participacion', component: Participacion },
  { path: '/actividades', name: 'Actividades', component: Actividades },
  { path: '/ocupacion', name: 'Ocupación', component: Ocupacion }
];

const App = () => {

  const [location, setLocation] = useState([]);

  const handleLocation = (e) => {
    setLocation(e);
  }

  return (
    <div className="h-screen flex">
      <Sidebar handleLocation={handleLocation}></Sidebar>
      <Main location={location}></Main>
    </div>
  )
}

const Sidebar = ({handleLocation}) => {
  return(
    <section className="h-full w-64 bg-gray flex-shrink-0">
      <h1 className="text-black-400 text-center text-3xl mt-4">Admin</h1>
      <ul className="mt-4">
        {
          RUTAS.map((ruta, i) => (
            <li key={i} className="hover:bg-green-300 focus:outline-none focus:shadow-2x1 cursor-pointer">
            <Link onClick={ () => handleLocation(ruta) } to={ruta.path} className="active"><div className="text-gray-800 px-6 py-4"> { ruta.name } </div></Link>
         </li>
         ))
        }
      </ul>
    </section>
  );
}

const Main = ({location}) => {
  return (
    <div className="h-full flex-grow bg-gray-100 px-8 overflow-hidden">
        <Route component={location.component} path={location.path}  />
  </div>
  )
}

export default App;
