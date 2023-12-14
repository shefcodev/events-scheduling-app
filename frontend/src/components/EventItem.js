import { Link, useSubmit } from 'react-router-dom';

import styles from './EventItem.module.css';

const EventItem = ({ event }) => {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'DELETE' });
    }
  };

  return (
    <article className={styles.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={styles.actions}>
        <Link to='edit'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
