import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

import styles from './NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const [email, setEmail] = useState('');
  const { Form, data, state } = fetcher;

  // console.log(fetcher);

  const emailChangeHandler = ({ target: { value } }) => {
    setEmail(value);
  };

  const clickHandler = () => {
    setEmail('');
  };

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <Form method='post' action='/newsletter' className={styles.newsletter}>
      <input
        name='email'
        type='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
        onChange={emailChangeHandler}
        value={email}
      />
      <button onClick={clickHandler}>Sign up</button>
    </Form>
  );
};

export default NewsletterSignup;
