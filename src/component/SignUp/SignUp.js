import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import './signup.css';
import { Link,useNavigate } from "react-router-dom";
import { signupUser } from "../../Services/SignUpService";
import { useState,useEffect } from "react";
import { useAuthAction,useAuth } from "../../Providers/AuthProvider";
import {useQuery} from './../../hooks/useQuery'


const initialValues={
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    passwordconfirm:"",
};

const validationSchema = Yup.object({
    name:Yup.string().required("Name is required").min(4,"Name lenght is not Valid"),
    email:Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
    password:Yup.string().required("password is required"),
    passwordconfirm:Yup.string().required("password confirmation required").oneOf([Yup.ref('password'),null], 'Password must match'),
});


const SignupForm = () => {
    const setAuth=useAuthAction();
    const history = useNavigate();
     const query = useQuery();
     const redirect = query.get('redirect') || "/";
    const [error, setError]=useState(null);
    const userData = useAuth();

    useEffect(()=>{
        if(userData) history(redirect);
    },[redirect,userData]);
    const onSubmit= async(values)=>{
        const {name,email,phoneNumber,password} = values;
        const userData={
            name,
            email,
            phoneNumber,
            password,
        };
        try {
           const {data}= await signupUser(userData);
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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
      });
    return ( 
        <>
            <form onSubmit={formik.handleSubmit} className="form">
                <Input formik={formik} name="name" label="Name" />
                <Input formik={formik} name="email" label="Email" type="email" />
                
                <Input  formik={formik} name="phoneNumber" label="Number" type="tel"/>
                <Input  formik={formik} name="password" label="Password" type='password' autocomplete="on"/>
                <Input  formik={formik} name="passwordconfirm" label="Password Confirm" type='password'/>
                <button type="submit" disabled={!formik.isValid} className="btn primary btnsign"> Sign Up</button>
                {error&&<p style={{color:"red"}}> {error}</p>}
                
                <Link to={`/login?redirect=${redirect}`}>
                    <p className="alreadylogin">Already Login?</p>
                </Link>
            </form>
        </>
    );
}
 
export default SignupForm;