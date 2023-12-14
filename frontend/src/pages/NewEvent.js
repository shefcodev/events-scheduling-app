import { Fragment } from 'react';
// import { json, redirect } from 'react-router-dom';

import EventForm from '../components/EventForm';

const NewEventPage = () => {
  return (
    <Fragment>
      <EventForm method='POST' />
    </Fragment>
  );
};

export default NewEventPage;

// export const action = async ({ request, params }) => {
//   const data = await request.formData();
//   console.log(data);

//   const eventData = {
//     title: data.get('title'),
//     image: data.get('image'),
//     date: data.get('date'),
//     description: data.get('description'),
//   };

//   const response = await fetch('http://localhost:8080/events', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json(
//       {
//         title: 'An error occurred.',
//         message: 'Could not save event data.',
//       },
//       {
//         status: 500,
//         statusText: 'An error occurred.',
//       }
//     );
//   } else {
//     // return null;
//   }

//   return redirect('/events');
// };
