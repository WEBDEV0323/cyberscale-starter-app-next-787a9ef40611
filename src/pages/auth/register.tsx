import { NextPage } from 'next';
import RegisterForm from '@modules/auth/components/pages/RegisterForm';
import withAuth, { AUTH_MODE } from '@modules/auth/hocs/withAuth';
import Routes from '@common/defs/routes';

const Register: NextPage = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default withAuth(Register, { mode: AUTH_MODE.LOGGED_OUT, redirectUrl: Routes.Common.Home });
