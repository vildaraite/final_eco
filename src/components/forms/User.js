import {Form, Formik} from "formik";
import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const userValidationSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(5, 'Name must be longer than 5')
            .max(10, 'Name must be shorter than 10')
            .required('Name is required'),
        surname: Yup.string()
            .min(5, 'Surname must be longer than 5')
            .max(10, 'Surname must be shorter than 10')
            .required('Surname is required'),
        email: Yup.string()
            .email()
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must contain at least 8 symbols...')
            .required('Password is required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password is required')
    }
)

const User = () => (

    <Formik
        initialValues={{
            username: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }}

        onSubmit={(values, helpers) => {
            console.log('values', values);
            console.log('helpers', helpers);

            setTimeout(() => {
                    helpers.setSubmitting(false);
                    helpers.resetForm();
                },
                1000);
        }}
        validationSchema={userValidationSchema}
    >
        {props => (
            <Form>
                <Stack spacing={1} direction="column">
                    <Typography variant="h5">Create user</Typography>
                    <FormTextInput error={props.touched.username && !!props.errors.username}
                                   name="username"
                                   label="User name"/>
                    <FormTextInput error={props.touched.surname && !!props.errors.surname}
                                   name="surname"
                                   label="User surname"/>
                    <FormTextInput error={props.touched.email && !!props.errors.email}
                                   name="email"
                                   label="User email"/>
                    <FormTextInput error={props.touched.password && !!props.errors.password}
                                   name="password"
                                   label="Password"
                                   type="password"/>
                    <FormTextInput error={props.touched.passwordConfirmation && !!props.errors.passwordConfirmation}
                                   name="passwordConfirmation"
                                   label="Password confirmation"
                                   type="password"/>
                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress/> :
                            <Button variant="outlined" type="submit">Save user</Button>
                    }
                </Typography>
            </Form>
        )}
    </Formik>
)

export default User;