import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './login.css';
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { loginUser } from "../../Services/LoginService";
import { useAuthAction,useAuth } from "../../Providers/AuthProvider";
import {useQuery} from './../../hooks/useQuery'

// inital values for the form
const initialValues = {
    email: "",
    password: "",
};

// Yup schema for form validation
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("password is required"),
});


const LoginForm = () => {
  // error state
    const[err, setError]= useState(null);
    const history = useNavigate()
    const query = useQuery();
    const redirect = query.get('redirect') || "/";

    // useAuthActions to dispatch actions
     const setAuth = useAuthAction();
    const userData = useAuth();

    useEffect(()=>{
        if(userData) history(redirect);
    },[redirect,userData])

      // submit handler
    const onSubmit= async(values)=>{
       
        try {
           const {data}= await loginUser(values);
           setAuth(data);
           //localStorage.setItem("authState", JSON.stringify(data));

           console.log(data);
           setError(null);
           history(redirect);
        } catch (error) {
            console.log(error);
            if(error.response && error.response.data.message)
            setError(error.response.data.message);
        }
    };

    // useFormik hook
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit} >
                <Input formik={formik} name="email" label="Email" type="email" />
                <Input formik={formik} name="password" label="Password" type='password' autocomplete="on" />
                
                <button type="submit" disabled={!formik.isValid} className="btn primary btnlg"> Log In</button>
                {err&&<p style={{color:"red",marginTop:"20px"}}> {err}</p>}
                <Link to={`/signup?redirect=${redirect}`}>
                    <p className="alreadylogin">Not have an Account yet? </p>
                </Link>
            

            </form>
        </div>
    );
}

export default LoginForm;