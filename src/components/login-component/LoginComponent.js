import { useState } from "react";
import { validateEmail, validatePassword } from "../../validators/validators";
import ButtonComponent from "../button-component/ButtonComponent";
import { LoginForm, LoginFormForm, LoginFormInputs } from "../input-component/styles";

const LoginComponent = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState([]);

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const signIn = async  (event) => {
        try {
            setLoading(true)
            alert('Login')
            setLoading(false)
        }
        catch (err) {
            alert('Algo deu errado');
        }
    }

    const validatorInput = () => {
        return validateEmail(form.email) && validatePassword(form.password);
    }

    return (
        <LoginForm>
            <LoginFormForm>
                <h1>Faça seu Login 🚀</h1>
                <LoginFormInputs
                name='email'
                placeholder="Digite o seu email"
                onChange={handleChange}
                type='email'
                />
                <LoginFormInputs
                name='password'
                placeholder="Digite sua Senha"
                onChange={handleChange}
                type='password'
                />
                <ButtonComponent
                    type='submit'
                    text='Sign In'
                    onClick={signIn}
                    disabled={loading === true || !validatorInput()}
                />
            </LoginFormForm>
        </LoginForm>
    );
}
 
export default LoginComponent;