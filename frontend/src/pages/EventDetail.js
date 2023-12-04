import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();
  const param = params.eventId;

  return (
    <Fragment>
      <h1>Event ID: {param}</h1>
    </Fragment>
  );
};

export default EventDetailPage;
