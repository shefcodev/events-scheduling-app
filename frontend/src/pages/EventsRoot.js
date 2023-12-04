import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.js';

const EventRootPage = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default EventRootPage;
