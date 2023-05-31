// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useState } from "react"
import FormInput from "../components/form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../components/button/button.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password : '',
    confirmPassword : ''
}

function SignUpForm (){

    const [formFields, setformFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    console.log("hit")


    const resetFormFields = ()=>{
        setformFields(defaultFormFields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("Passwords Do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            
            await createUserDocumentFromAuth(user,{displayName})



            resetFormFields();
        }catch(error){
           if (error.code ==='auth/email-already-in-use'){
            alert("Email is already in use")
           }
        }
    }


    const handleChange = (event) => {
       const {name, value} = event.target;
       setformFields({...formFields, [name] : value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password </span>
            <form onSubmit={handleSubmit}>
           
            <FormInput required type="text"
            label="Display Name"
             onChange={handleChange} 
             name="displayName" 
             value={displayName}/>

            <FormInput required type="email"
            label = "Email"
             onChange={handleChange} 
             name="email"
              value={email} />


           
            <FormInput required type="password"
            label ="Password"
             onChange={handleChange} 
             name="password" 
             value={password}/>


            <FormInput required type="password"
            label = "Confirm Password"
             onChange={handleChange} 
             name="confirmPassword"
              value={confirmPassword}/>


            <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm