import PageHeader from '@common/components/lib/partials/PageHeader';
import Timeline from '@common/components/partials/Timeline';
import Routes from '@common/defs/routes';
import withAuth, { AUTH_MODE } from '@modules/auth/hocs/withAuth';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Timeline />
    </>
  );
};

export default withAuth(Index, {
  mode: AUTH_MODE.LOGGED_IN,
  redirectUrl: Routes.Auth.Login,
});
