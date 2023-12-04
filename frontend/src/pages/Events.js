import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  console.log(data);

  const events = data.events;

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/event');

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        title: 'An error occured.',
        message: 'Could not fetch events.',
      }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
