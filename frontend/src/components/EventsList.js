 import styles from './EventsList.module.css';

const EventsList = ({ events }) => {
  return (
    <div className={styles.events}>
      <h1>All Events</h1>
      <ul className={styles.list}>
        {events.map((event) => (
          <li key={event.id} className={styles.item}>
            <a href='...'>
              <img src={event.image} alt={event.title} />
              <div className={styles.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
