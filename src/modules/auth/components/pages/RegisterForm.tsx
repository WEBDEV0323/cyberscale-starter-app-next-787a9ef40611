import FormProvider, { RHFTextField } from '@common/components/lib/react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth, { LoginInput } from '@modules/auth/hooks/api/useAuth';
import { LockOpen } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const RegisterForm = () => {
  const { login } = useAuth();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Le format de l'email est incorrect")
      .required('Le champ est obligatoire'),
    password: Yup.string().required('Le champ est obligatoire'),
  });
  const methods = useForm<LoginInput>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: LoginInput) => {
    await login(
      {
        email: data.email,
        password: data.password,
      },
      { displayProgress: true, displaySuccess: true }
    );
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          marginTop: 2,
          marginBottom: 2,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Register
      </Typography>
      <Card sx={{ maxWidth: '450px', margin: 'auto' }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} sx={{ padding: 5 }}>
            <Grid item xs={12}>
              <RHFTextField name="first_name" label="First Name" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="last_name" label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="email" label="Email" type="email" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="confirm_email" label="Confirm Email" type="email" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="password" label="Password" type="password" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="confirm_password" label="Confrim Password" type="password" />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField name="phone_number" label="Phone Number" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <LoadingButton
                size="large"
                variant="contained"
                type="submit"
                startIcon={<LockOpen />}
                loadingPosition="start"
                loading={isSubmitting}
              >
                Register
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </>
  );
};

export default RegisterForm;
