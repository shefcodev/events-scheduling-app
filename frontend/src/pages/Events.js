import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p style={{ textAlign: 'center' }}>{data.message}</p>;
  // }

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
    // return { isError: true, message: 'Could not fetch Events.' };

    throw { message: 'Something went wromg!' };
  } else {
    return response;
  }
};
