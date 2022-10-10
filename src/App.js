import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainHomePage from './Components/MainHomePage';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainHomePage></MainHomePage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
