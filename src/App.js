import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainHomePage from './Components/MainHomePage';
import ErrorPage from './Components/ErrorPage';
import HomePage from './Components/Main-Section/HomePage-Section/HomePage';
import Blog from './Components/Main-Section/Blog-Section/Blog';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainHomePage></MainHomePage>,
      children:[
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path:'/statiestics'
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
