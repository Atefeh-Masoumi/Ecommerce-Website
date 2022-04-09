import'./input.css';
const Input = ({formik,name,label, type="text"}) => {
    return ( 
        <div className="formControl">
            <div >
                <label htmlFor={name}>{label} : </label>
                <input id={name} type={type}  name={name}
                    {...formik.getFieldProps(name)}/>
                </div>
                {formik.errors[name] && formik.touched[name]&&<div style={{color:"red"}}>{formik.errors[name]}</div>}
        </div>
     );
}
 
export default Input;