import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { AppContext } from './context/ApiContext';

import Header from './components/Header';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
]);

function App() {
  return (
    <>
      <AppContext>
        <div className="flex flex-col h-full">
          <RouterProvider router={appRouter} />
        </div>
      </AppContext>
    </>
  );
}

export default App;
