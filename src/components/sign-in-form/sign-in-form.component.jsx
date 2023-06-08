// import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { useState } from "react"
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";
const defaultFormFields = {
    email: '',
    password : '',
}

function SignInForm (){

    const [formFields, setformFields] = useState(defaultFormFields);
    const { email, password} = formFields;


    const resetFormFields = ()=>{
        setformFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
        
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
       
        try{
           await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();

     }catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert("Wrong Password or Email");
                break
            case 'auth/user-not-found':
                alert("No user associated with this email")
                break;
            default:
                console.log(error);
        }
         }
        

    }
    const handleChange = (event) => {
       const {name, value} = event.target;
       setformFields({...formFields, [name] : value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password </span>
            <form onSubmit={handleSubmit}>
           

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

            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            </form>
        </div>
    )
    
}
export default SignInForm;
