import { Fragment } from 'react';
import { useLoaderData, json } from 'react-router-dom';

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
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch data' };
    // throw new Response(
    //   JSON.stringify({
    //     title: 'An error occured.',
    //     message: 'Could not fetch events.',
    //   }),
    //   {
    //     status: 500,
    //     statusText: 'An error occured',
    //   }
    // );

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
    return response;
  }
};
