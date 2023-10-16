import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppContext } from './context/ApiContext';
import store from './store/store';

import Header from './components/Header/Header';
import Live from './components/LiveChat/Live';
import UseRefExample from './components/Examples/UseRefExample';
import UseRefExample02 from './components/Examples/UseRefExample02';

import Feed from './pages/Feed';
import SearchResult from './pages/SearchResult';
import VideoDetails from './pages/VideoDetails';

import Error from './shared/Error';

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
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/live',
        element: <Live />,
      },
      {
        path: '/searchResult/:searchQuery',
        element: <SearchResult />,
      },
      {
        path: '/userefex',
        element: (
          <>
            <div className='flex justify-center items-center'>
              <UseRefExample />
              <UseRefExample02 />
            </div>
          </>
        ),
      },
      {
        path: '/video/:id',
        element: <VideoDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <AppContext>
          <div className="flex flex-col h-full">
            <RouterProvider router={appRouter} />
          </div>
        </AppContext>
      </Provider>
    </>
  );
}

export default App;
