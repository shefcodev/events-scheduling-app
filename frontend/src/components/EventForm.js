import { useNavigate } from 'react-router-dom';

import styles from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' name='title' required />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input id='image' type='url' name='image' required />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' name='date' required />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description' rows='5' required />
      </p>
      <div className={styles.actions}>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;