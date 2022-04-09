import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './login.css';
import { Link } from "react-router-dom";


const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("password is required"),
});

const onSubmit = (values) => {
    console.log(values);
};

const LoginForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <Input formik={formik} name="email" label="Email" type="email" />
            <Input formik={formik} name="password" label="Password" type='password' />
            <button type="submit" disabled={!formik.isValid} className="btn primary btnlg"> Log In</button>
            <Link to='/signup'>
                <p className="alreadylogin">Not have an Account yet? </p>
            </Link>

        </form>
    );
}

export default LoginForm;