import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayoutPage from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EventsRootLayoutPage from './pages/EventsRoot';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';

const routeDefinitions = [
  {
    path: '/',
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayoutPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
