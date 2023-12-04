import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occured';
  let message = 'Could not fetch events';

  if (error.status === 500) {
    title = JSON.parse(error.data).title;
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page.';
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
