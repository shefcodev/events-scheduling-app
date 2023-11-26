import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.js';

const EventRootPage = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventRootPage;
