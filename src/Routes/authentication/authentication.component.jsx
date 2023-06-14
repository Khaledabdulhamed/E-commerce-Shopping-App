
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AurhenticationContainer} from './authentication.styles'
function Authentication () {
    return (
        <AurhenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AurhenticationContainer>
    )
}

export default Authentication;