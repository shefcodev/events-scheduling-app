import { Fragment, Suspense } from 'react';
import { useRouteLoaderData, Await } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const { event } = useRouteLoaderData('event-detail');

  return (
    <Fragment>
      <Suspense
        fallback={<p style={{ textAlign: 'center' }}>loading FormData...</p>}
      >
        <Await resolve={event}>
          {({ event }) => <EventForm event={event} method='PATCH' />}
        </Await>
      </Suspense>
    </Fragment>
  );
};

export default EditEventPage;
