import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import './signup.css';


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
    password:Yup.string().required("password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordconfirm:Yup.string().required("password confirmation required").oneOf([Yup.ref('password'),null], 'Password must match'),
});

const onSubmit= (values)=>{
    console.log(values);
};

const SignupForm = () => {
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
                <button type="submit" disabled={!formik.isValid} className="btn primary"> submit</button>
            </form>
        </>
    );
}
 
export default SignupForm;