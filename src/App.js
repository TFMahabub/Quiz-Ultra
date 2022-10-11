import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainHomePage from './Components/MainHomePage';
import ErrorPage from './Components/ErrorPage';
import HomePage from './Components/Main-Section/HomePage-Section/HomePage';
import Blog from './Components/Main-Section/Blog-Section/Blog';
import Statiestics from './Components/Main-Section/Statiestics-Section/Statiestics';
import QuizPage from './Components/Main-Section/HomePage-Section/QuizPage';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainHomePage></MainHomePage>,
      children:[
        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <HomePage></HomePage>
        },
        {
          path:'/statiestics',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Statiestics></Statiestics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizPage></QuizPage>
        },

        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
