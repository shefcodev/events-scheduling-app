import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayoutPage = () => {
  // const navigation = useNavigation();

  return (
    <Fragment>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && (
          <p style={{ textAlign: 'center ' }}>Loading</p>
        )} */}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayoutPage;
