import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const { events } = useLoaderData();
  console.log(events);

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {({ events }) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events/');

  if (!response.ok) {
    throw json(
      {
        title: 'An error occurred.',
        message: 'Could not fetch events.',
      },
      {
        status: 500,
        statusText: 'An error occurred',
      }
    );
  } else {
    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
