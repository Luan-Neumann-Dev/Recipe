import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ViewHome, ViewRecipeList, ViewRecipeSingle, ViewSearchResult, ViewError, ViewTypeList } from './views';

import BaseLayout from './layouts/BaseLayout'

//ARRAY DE ROTAS DEVE SER PASSADO AQUI
const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ViewError />,
    children: [
      {
        path: '/',
        element: <ViewHome />
      },
      {
        path: 'recipes/:typeOf/:typeName',
        element: <ViewRecipeList />,
      },
      {
        path: 'recipes/:id',
        element: <ViewRecipeSingle />
      },
      {
        path: 'recipes/search',
        element: <ViewSearchResult />
      },
      {
        path: 'types/:typeId',
        element: <ViewTypeList />
      },
      {
        path: '*',
        element: <ViewError />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
