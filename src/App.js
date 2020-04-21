import React from 'react';
import './App.css';
// import './styles/app.css';
import Charts from './components/Charts';
// import Slides from './components/Slides';


// function App() {
//   return (
//     <div> <Charts name='angel' / > </div>
//   );
// }

const App = () => {
  return (
    <div>
      {/* <Slides></Slides> */}
       <div> 
         <Charts name='angel' />
         </div>
    </div>
  )
}

export default App;
