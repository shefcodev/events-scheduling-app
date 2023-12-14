import { Fragment, Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { loadEvents } from './Events';

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <Fragment>
      <Suspense
        fallback={<p style={{ textAlign: 'center' }}>Event loading...</p>}
      >
        <Await resolve={event}>
          {({ event }) => <EventItem event={event} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: 'center' }}>Events loading...</p>}
      >
        <Await resolve={events}>
          {({ events }) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </Fragment>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      {
        title: 'An error occurred',
        message: 'Could not fetch details for selected event.',
      },
      {
        status: 500,
        statusText: 'An error occurred',
      }
    );
  } else {
    const responseData = await response.json();
    return responseData;
  }
};

export const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.eventId),
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      {
        title: 'An error occurred.',
        message: 'Could not delete event.',
      },
      {
        status: 500,
        statusText: 'An error occurred',
      }
    );
  }

  return redirect('/events');
};
