import ButtonComponent from "../button-component/ButtonComponent";
import { LoginForm, LoginFormForm, LoginFormInputs } from "../input-component/styles";

const LoginComponent = () => {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const signIn = () => {
        alert('works')
    }

    return (
        <LoginForm>
            <LoginFormForm>
                <h1>Faça seu Login 👋</h1>
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
                />
            </LoginFormForm>
        </LoginForm>
    );
}
 
export default LoginComponent;