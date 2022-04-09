import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import './signup.css';
import { Link } from "react-router-dom";
import { signupUser } from "../../Services/SignUpService";
import { useState } from "react";


const initialValues={
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    passwordconfirm:"",
};

const validationSchema = Yup.object({
    name:Yup.string().required("Name is required").min(4,"Name lenght is not Valid"),
    email:Yup.string().email("Invalid email format").required("Email is required"),
    phonenumber:Yup.string().required("please write your number").matches(/^[0-9]{11}$/,"Invalid Phone Number").nullable(),
    password:Yup.string().required("password is required"),
    passwordconfirm:Yup.string().required("password confirmation required").oneOf([Yup.ref('password'),null], 'Password must match'),
});


const SignupForm = () => {
    const [error, setError]=useState(null);
    const onSubmit= async(values)=>{
        const {name,email,phonenumber,password} = values;
        const userData={
            name,
            email,
            phonenumber,
            password,
        };
        try {
           const {data}= await signupUser(userData);
           console.log(data);
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
                
                <Input  formik={formik} name="phonenumber" label="Number" type="tel"/>
                <Input  formik={formik} name="password" label="Password" type='password'/>
                <Input  formik={formik} name="passwordconfirm" label="Password Confirm" type='password'/>
                <button type="submit" disabled={!formik.isValid} className="btn primary btnsign"> Sign Up</button>
                {error&&<p style={{color:"red"}}> {error}</p>}
                <Link to='/login'>
                    <p className="alreadylogin">Already Login?</p>
                </Link>
            </form>
        </>
    );
}
 
export default SignupForm;