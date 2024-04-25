import PageHeader from '@common/components/lib/partials/PageHeader';
import Timeline from '@common/components/partials/Timeline';
import Routes from '@common/defs/routes';
import withAuth, { AUTH_MODE } from '@modules/auth/hocs/withAuth';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        endIcon={
          <ArrowForwardIos
            fontSize="small"
            className="arrow-icon"
            sx={{ fontSize: '12px', transition: 'all, 0.15s' }}
          />
        }
        onClick={() => router.push(Routes.Auth.Register)}
        sx={{
          display: { xs: 'none', md: 'flex' },
          '&:hover': {
            '.arrow-icon': {
              transform: 'translateX(0.25rem)',
            },
          },
        }}
      >
        Create
      </Button>
      <PageHeader title="Dashboard" />
      <Timeline />
    </>
  );
};

export default withAuth(Index, {
  mode: AUTH_MODE.LOGGED_IN,
  redirectUrl: Routes.Auth.Login,
});
