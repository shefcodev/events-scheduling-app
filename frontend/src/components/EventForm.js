import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from 'react-router-dom';

import styles from './EventForm.module.css';

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('..');
  };

  console.log(data);

  return (
    <Form method={method} className={styles.form}>
      {/* {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error, idx) => (
            <li key={idx} style={{ textAlign: 'center' }}>
              {error}
            </li>
          ))}
        </ul>
      )} */}
      <p>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          defaultValue={event ? event.title : ''}
          required
        />
        {data && data.errors && data.errors.title}
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          type='url'
          name='image'
          defaultValue={event ? event.image : ''}
          required
        />
        {data && data.errors && data.errors.image}
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='date'
          name='date'
          defaultValue={event ? event.date : ''}
          required
        />
        {data && data.errors && data.errors.date}
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          rows='5'
          defaultValue={event ? event.description : ''}
          required
        />
        {data && data.errors && data.errors.description}
      </p>
      <div className={styles.actions}>
        <button type='button' onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params, context }) => {
  const method = request.method;
  console.log(request);
  const data = await request.formData();
  console.log(data);

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = 'http://localhost:8080/events/';
  url = method === 'POST' ? url : url + params.eventId;

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json(
      {
        title: 'An error occurred.',
        message: 'Could not save event data.',
      },
      {
        status: 500,
        statusText: 'An error occurred.',
      }
    );
  } else {
    // return null;
  }
  return redirect('/events');
};
