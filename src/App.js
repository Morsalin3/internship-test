import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {path: '/', element: <Home></Home> },
        {path: '/home', element: <Home></Home> },
        {path: '/summary', element: <Summary></Summary> }
      ]
    }
  ])

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider> 
      
      
    </div>
  );
}

export default App;
