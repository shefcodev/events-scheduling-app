import { Fragment } from 'react';
import { useParams, useLoaderData, json } from 'react-router-dom';

// import { loader } from './Events';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const params = useParams();
  const param = params.eventId;

  const data = useLoaderData();
  console.log(data);

  return (
    <Fragment>
      {/* <EventItem event={data.events.find(({ id }, idx) => param === id)} /> */}
      <EventItem event={data.event} />
    </Fragment>
  );
};

export default EventDetailPage;

// export const eventDetailLoader = loader;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
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
    return response;
  }
};
