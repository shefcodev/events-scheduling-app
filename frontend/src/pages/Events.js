import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Events = [
  { id: 1, title: 'Event 1' },
  { id: 2, title: 'Event 2' },
  { id: 3, title: 'Event 3' },
];

const EventsPage = () => {
  return (
    <Fragment>
      <h1>Events Page</h1>
      <ul>
        {Events.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/events/${id}`} style={{ textDecoration: 'none' }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default EventsPage;
