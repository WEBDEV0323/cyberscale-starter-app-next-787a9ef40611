import Routes from '@common/defs/routes';
import ResetPassword from '@modules/auth/components/pages/ResetPassword';
import withAuth, { AUTH_MODE } from '@modules/auth/hocs/withAuth';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  // token from url as string
  const { token } = router.query;
  return (
    <>
      <ResetPassword token={token as string} />
    </>
  );
};

export default withAuth(ResetPasswordPage, {
  mode: AUTH_MODE.LOGGED_OUT,
  redirectUrl: Routes.Common.Home,
});
