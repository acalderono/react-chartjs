import React, { useState, useEffect } from 'react';
import './App.css';
import ComparacionSemanal from './pages/ComparacionSemanal';
import ParticipacionFabrica from './pages/ParticipacionFabrica';
import { Link, useLocation, Route } from 'wouter';

const RUTAS = [
  { path: '/semanal', name: 'Semanal', component: ComparacionSemanal },
  { path: '/participacion', name: 'Participacion', component: ParticipacionFabrica },
  { path: '/actividades', name: 'Actividades', component: ComparacionSemanal },
  { path: '/ocupacion', name: 'Ocupación', component: ComparacionSemanal }
];


const App = () => {

  return (
    <div className="h-screen flex">
      <Sidebar></Sidebar>
      {/* <Main></Main> */}
    </div>
  )
}

const Sidebar = () => {

  const [path, setPath] = useState('');

  return (<>
    <section className="h-full w-64 bg-gray flex-shrink-0">
      <h1 className="text-black-400 text-center text-3xl mt-4">Admin</h1>
      <ul className="mt-4">
        {
          RUTAS.map((ruta, index) => (
          <li className="hover:bg-green-300 focus:outline-none focus:shadow-2x1 cursor-pointer">
             <Link to={ruta.path} className="active"><div className="text-gray-800 px-6 py-4"> { ruta.name } </div></Link>
          </li>

          ))
        }
      </ul>
    </section>
      <div className="h-full flex-grow bg-gray-100 px-8 overflow-hidden">
        {
          RUTAS.map((ruta, index) => (
            <Route key={index} component={ruta.component} path={ruta.path}  />
          ))
        }
      {/* <Route component={ComparacionSemanal} path="/semanal" />
      <Route component={ParticipacionFabrica} path="/participacion"  /> */}
      </div>
  </>)
}

const Spinner = () => {
  return <p>Cargando...</p>;
}

const Main = () => {
  return (
    <div className="h-full flex-grow bg-gray-100 px-8 overflow-hidden">
      {/* <h1 className="text-black-400 text-3xl mt-4 mb-4 ">Item</h1> */}
      {/* <ul className="mt-4 flex overflow-auto max-w-full">
                <li className="p-8 bg-gray-800 rounded-lg w-56 mr-4 flex-shrink-0">
                  <h3 className="text-white text-lg mt-4">ComparacionSemanal</h3>
                </li>
                <li className="p-8 bg-gray-800 rounded-lg w-56 mr-4 flex-shrink-0">
                  <h3 className="text-white text-lg mt-4">Participacion Fábrica</h3>
                </li>
                <li className="p-8 bg-gray-800 rounded-lg w-56 mr-4 flex-shrink-0">
                  <h3 className="text-white text-lg mt-4">Night Rider</h3>
                </li>

            </ul> */}
      {/* <ComparacionSemanal data={data}></ComparacionSemanal> */}
      {/* <ParticipacionFabrica></ParticipacionFabrica> */}
    </div>
  )
}

export default App;
